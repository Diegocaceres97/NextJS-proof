const fetComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  /*  throw new Error('Error al cargar comentario'); */
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetComments(id);
  return (
    <ul style={{ background: "#4444", fontSize: "14px" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <h4>{comment.body}</h4>
        </li>
      ))}
    </ul>
  );
}
