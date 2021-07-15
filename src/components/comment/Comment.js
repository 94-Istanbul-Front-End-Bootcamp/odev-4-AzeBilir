import React from "react";
import ReactStars from "react-rating-stars-component";

const Comment = (props) => {
  const { comment } = props;

  return (
    <div>
      <p>{comment.text}</p>
      <ReactStars
        count={5}
        edit={false}
        value={comment.vote}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Comment;