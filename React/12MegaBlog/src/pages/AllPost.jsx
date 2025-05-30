import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../Components";
import appwriteService from "../conf/conf"

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPost([]).then((posts) => {
      if (posts) setPosts(posts.documnet);
    }, []);
  });

  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
