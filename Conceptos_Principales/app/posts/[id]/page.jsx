import { resolve } from "styled-jsx/css";
import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  /* console.log(data); */
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
      <hr />

      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>Cargando Publicaciones...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}
export default Page;
