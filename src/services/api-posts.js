import BaseData from "../store/pots.json";

export const loadInit = async () => {
  localStorage.setItem("posts", JSON.stringify(BaseData));
};

export const savePost = async (newPost) => {
  let posts = localStorage.getItem("posts");

  if (newPost.id) {
    console.log("atualizar");
  } else {
    posts = {
      ...posts,
      newPost,
    };
  }
  localStorage.setItem({ posts });
};

export const deletePost = async (id) => {
  console.log(id);
};

export const getPost = async (id) => {
  console.log(id);
};

export const getAllPosts = async () => {
  const posts = await localStorage.getItem("posts");
  return JSON.parse(posts);
};
