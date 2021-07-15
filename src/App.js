import React, { Component } from "react";
import "./App.css";
import AddComment from "./components/addComment/AddComment";
import Comment from "./components/comment/Comment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      commentValue: "",
      vote: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ commentValue: event.target.value });
  };

  handleRating = (vote) => {
    this.setState({ vote });
  };

  handleSubmit = () => {
    const newState = this.state;

    newState.comments.push({
      text: this.state.commentValue,
      vote: this.state.vote,
    });
    newState.commentValue = "";
    newState.vote = 0;

    this.setState({
      ...newState,
    });
  };

  render() {
    const { comments, commentValue } = this.state;
    console.log(comments);
    return (
      <div className="App">
        <h2>Yorumlar</h2>
  
        
        {comments.length === 0 ? (
          <p>Henüz hiç yorum yok</p>
        ) : (
          comments.map((comment) => <Comment comment={comment} />)
        )}

        <h2>Yorum Ekle</h2>
        <AddComment
          handleSubmit={this.handleSubmit}
          commentValue={commentValue}
          handleChange={this.handleChange}
          handleRating={this.handleRating}
        /> 
      </div>
    );
  }
}

export default App;