import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../Components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const fetchPost = useCallback(async () => {
        if (!slug) {
            navigate("/");
            return;
        }

        try {
            setLoading(true);
            const postData = await appwriteService.getPost(slug);
            if (postData) {
                setPost(postData);
            } else {
                navigate("/");
            }
        } catch (err) {
            setError(err.message);
            console.error('Failed to fetch post:', err);
        } finally {
            setLoading(false);
        }
    }, [slug, navigate]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    const deletePost = useCallback(async () => {
        try {
            const status = await appwriteService.deletePost(post.$id);
            if (status) {
                await appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        } catch (err) {
            console.error('Failed to delete post:', err);
            setError(err.message);
        }
    }, [post, navigate]);

    if (loading) {
        return (
            <div className="w-full py-8">
                <Container>
                    <div className="text-center">Loading post...</div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-8">
                <Container>
                    <div className="text-center text-red-500">Error: {error}</div>
                </Container>
            </div>
        );
    }

    if (!post) {
        return null;
    }

    const isAuthor = userData ? post.userId === userData.$id : false;

    return (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    );
}

export default React.memo(Post);