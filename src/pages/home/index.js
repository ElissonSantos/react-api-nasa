import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "antd";

import "./styles.css";

import CardPost from "./card-post";
import { getAllPosts } from "../../services/api-posts";
import Loading from "../../components/loading";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [noPost, setNoPosts] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const postsData = await getAllPosts();
    postsData.length === 0 ? setNoPosts(true) : setNoPosts(false);
    setPosts(postsData);
    setLoading(false);
  };

  return (
    <div className="size">
      <Col xs={22} md={20} lg={18}>
        <div className="home-button">
          <h2 className="destak">
            {noPost
              ? "Não há nenhum post cadastrado"
              : "Veja alguns destaques."}
          </h2>
          <Link to="newpost">
            <p className="new-post">Nova Postagem</p>
          </Link>
        </div>
      </Col>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {posts.map((post) => {
            return <CardPost key={post.id} post={post} loadPosts={loadPosts} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
