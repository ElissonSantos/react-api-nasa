import React, { useState } from "react";
// Styles
import "./styles.css";

function CardPost(props) {
  const [post, setPost] = useState(props.post);

  // useEffect(() => {
  //   const today = new Date(props.img.date);
  //   setToday(String(today));
  //   const day = String(today.getDate()).padStart(2, "0");
  //   const month = String(today.getMonth() + 1).padStart(2, "0");
  //   const year = today.getFullYear();
  //   axios
  //     .get(
  //       `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${props.img.image}.png`,
  //       { params: { api_key: "3c0aDGuxR3r5xcVYQVZFnW4zKG9oETvx9ogQ1YR7" } }
  //     )
  //     .then((data) => {
  //       const as = data.config.url;
  //       setImg(as.text);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="card-post">
      <img className="img-post" src={post.img} alt={post.title} />
      <h1 className="title-post">{post.title}</h1>
      <p className="body-post">{post.body}</p>
    </div>
  );
}

export default CardPost;
