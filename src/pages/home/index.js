import React, { useState, useEffect } from "react";

import "./styles.css";

import CardPost from "./card-post";
import { getAllPosts } from "../../services/api-posts";
import Loading from "../../components/loading";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const postsData = await getAllPosts();
    setPosts(postsData);
    setLoading(false);
  };

  return (
    <div className="size">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {posts ? (
            posts.map((post) => {
              return <CardPost post={post} />;
            })
          ) : (
            <div className="card-not-post">
              <h1>Não há nenhum post cadastrado</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
