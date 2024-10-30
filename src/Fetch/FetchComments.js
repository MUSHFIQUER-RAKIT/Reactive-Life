export const FetchComments = async PostId => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${PostId}/comments`
  );

  return result.json();
};
