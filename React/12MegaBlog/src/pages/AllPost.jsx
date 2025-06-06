import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../Components";
import appwriteService from "../conf/conf"

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await appwriteService.getPost([]);
        if (response) {
          setPosts(response.documents || []);
        }
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-8">
        <Container>
          <div className="text-center">Loading posts...</div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <Container>
          <div className="text-center text-red-500">Error: {error}</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.length === 0 ? (
            <div className="w-full text-center">No posts found</div>
          ) : (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(AllPost);
