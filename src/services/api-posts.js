/* eslint-disable eqeqeq */
import BaseData from "../store/posts.json";

export const loadInit = async () => {
  localStorage.setItem("posts", JSON.stringify(BaseData));
};

// Metodo Post - Put
export const savePost = async (newPost) => {
  let posts = localStorage.getItem("posts");
  posts = JSON.parse(posts);

  if (newPost.id) {
    posts = posts.map((post) => {
      if (post.id == newPost.id) {
        let updated = {
          title: newPost.title,
          body: newPost.body,
          img: newPost.img,
        };
        return updated;
      } else {
        return post;
      }
    });
  } else {
    newPost = { ...newPost, id: posts.length + 1 };
    posts.push(newPost);
  }

  localStorage.setItem("posts", JSON.stringify(posts));
};

// Metodo DELETE
export const deletePost = async (id) => {
  let posts = localStorage.getItem("posts");
  posts = JSON.parse(posts);

  posts = posts.filter((data) => {
    return data.id !== id;
  });

  localStorage.setItem("posts", JSON.stringify(posts));
};

// Metodo Get
export const getPost = async (id) => {
  const posts = await getAllPosts();
  let post = posts.filter((data) => {
    return data.id == id;
  });
  return post[0];
};

// Metodo Get
export const getAllPosts = async () => {
  const posts = await localStorage.getItem("posts");
  let jsonPosts = JSON.parse(posts);
  jsonPosts.reverse();
  return jsonPosts;
};
