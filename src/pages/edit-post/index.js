/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

import { savePost, getPost } from "../../services/api-posts";

function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState(true);
  const [idPost, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [img, setImg] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      loadPost();
    }
  }, []);

  const loadPost = async () => {
    const post = await getPost(id);
    if (!post) {
      setError("Não foi encontrado nenhum post com este ID.");
      setPost(false);
    }
    setId(post.id);
    setTitle(post.title);
    setBody(post.body);
    setImg(post.img);
  };

  const save = () => {
    if (!title || !body || !img) {
      setError("Nenhum Campo pode estar vazio.");
      return;
    }
    savePost({ id: idPost, title, body, img })
      .then((result) => {
        history.push("/");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="size">
      <div className="card-edit-post">
        {error && <p className="error-save">{error}</p>}

        {post && (
          <div>
            {id ? <h1>Editar Post</h1> : <h1>Novo Post</h1>}{" "}
            <div className="input-area">
              <p className="input-title">Titulo:</p>
              <input
                placeholder="Título da publicação."
                className="input"
                value={title}
                onChange={(value) => setTitle(value.target.value)}
              />
            </div>
            <div className="input-area">
              <p className="input-title">Corpo:</p>
              <textarea
                placeholder="Digite aqui o conteúdo da publicação."
                rows="5"
                className="input"
                value={body}
                onChange={(value) => setBody(value.target.value)}
              ></textarea>
            </div>
            <div className="input-area">
              <p className="input-title">Imagem:</p>
              <input
                placeholder="URL da imagem da publicação."
                className="input"
                value={img}
                onChange={(value) => setImg(value.target.value)}
              />
            </div>
            {error && <p className="error-save">{error}</p>}
            <div className="edit-post-options">
              <div className="btn btn-cancel">
                <Link className="cancel" to="/">
                  <FontAwesomeIcon icon={faTimes} className="cancel" />
                  Cancelar
                </Link>
              </div>
              <div className="btn btn-save" onClick={save}>
                <FontAwesomeIcon icon={faSave} className="save" />
                Salvar
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditPost;
