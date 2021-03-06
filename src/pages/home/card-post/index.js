/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

import { deletePost } from "../../../services/api-posts";
import { Col } from "antd";

function CardPost(props) {
  const [post, setPost] = useState(props.post);

  const handleDelete = () => {
    deletePost(post.id);
    props.loadPosts();
  };

  return (
    <Col className="card-post" xs={24} md={24} lg={24}>
      <img className="img-post" src={post.img} alt={post.title} />
      <h1 className="title-post">{post.title}</h1>
      <p className="body-post">{post.body}</p>
      <div className="post-options">
        <Link to="" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} className="trash-post" />
        </Link>
        <Link to={`editpost/${post.id}`}>
          <FontAwesomeIcon icon={faEdit} className="edit-post" />
        </Link>
      </div>
    </Col>
  );
}

export default CardPost;
