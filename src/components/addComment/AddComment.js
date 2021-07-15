import React from "react";
import ReactStars from "react-rating-stars-component";

const AddComment = (props) => {
  const { handleSubmit, commentValue, handleChange, handleRating } = props;

  return (
    <div>
      <textarea name="comment" value={commentValue} onChange={handleChange} />
      <ReactStars
        count={5}
        onChange={handleRating}
        size={24}
        activeColor="#ffd700"
      />
      <button onClick={handleSubmit} id="btn">
        Yorum Yap
      </button>
    </div>
  );
};

export default AddComment;