import React, { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch";
import { useNearScreen } from "./hooks/useNearScreen";
import { BASE_URL } from "./url";
import Comment from "./components/Comment";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [isIntercepted, elementRef] = useNearScreen();
  const [data, loading] = useFetch(`${BASE_URL}?postId=${counter}`);

  useEffect(() => {
    if (isIntercepted) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }, [isIntercepted]);

  return (
    <div>
      <h1>Infinite Scroll!</h1>
      {data.map((comment) => {
        return (
          <Comment
            key={comment.id}
            body={comment.body}
            email={comment.email}
            name={comment.name}
            postId={comment.postId}
          />
        );
      })}
      <div
        style={{ display: loading ? "none" : "block" }}
        ref={elementRef}
      >
        <p> Loading... </p>
      </div>
    </div>
  );
};

export default App;
