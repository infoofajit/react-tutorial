const PostComponent = ({data, isLoading, error}) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.map((row) => <li key={row.id}>{row.title}</li>)}
    </ul>
  )
}

export default PostComponent
