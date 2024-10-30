import { useEffect, useState } from "react";
import { FetchComments } from "../Fetch/FetchComments";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    console.log("Fetching......");

    async function StartFetching() {
      const Json = await FetchComments(postId);
      console.log("Waiting.....");
      if (!ignore) {
        setComments(Json);
        console.log("Commenting.....");
      }
    }
    StartFetching();

    return () => {
      ignore = true;
    }; //Jokhon Function ta unMount hobe tokhnee Ai fn ta call hbe
  }, [postId]);

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
}
