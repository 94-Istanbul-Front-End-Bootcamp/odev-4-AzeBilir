import "./App.css";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      valueComment: "3",
      valueVote: 0,
      sonuçComment: "",
      sonuçVote: "",
    };
  }

  handleComment = () => {
    const newState = this.state;

    newState.comments.push({
      text: this.state.valueComment,
      vote: this.state.valueVote,
    });
    newState.valueComment = "";
    newState.valueVote = 0;

    this.setState({
      ...newState,
    });
  };

  handleChangeComment = (e) => {
    this.setState({
      valueComment: e.target.value,
    });
  };

  handleChangeVote = (e) => {
    this.setState({
      valueVote: this.state.valueVote,
    });
  };

  calculateComment = (valueComment) => {
    let yorum = [this.state.valueComment];
    let oy = [this.state.valueVote];
    this.setState({
      sonuçComment: yorum,
      sonuçVote: oy,
    });
    console.log(this.state.sonuçComment);
    console.log(this.state.sonuçVote);
    return (
      <>
        <ReactStars value={this.state.valueVote} />
        <p>"this.state.valueComment: " + {this.state.valueComment} </p>
      </>
    );
  };

  render() {
    console.log(this.state.valueComment);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Yorumlar</h1>
          <Card className="Card">
            {" "}
            <h1> {this.state.sonuçComment} </h1>
            <h1> {this.state.sonuçVote} Puan aldı </h1>
          </Card>
          <h1>Yorum Ekle</h1>
          <ReactStars onChange={this.handleChangeVote} size={30} />
          <InputGroup className="InputGroup">
            <FormControl
              onChange={this.handleChangeComment}
              value={this.valueComment}
              className="FormControl"
            />
          </InputGroup>
          <Button onClick={this.calculateComment}>Yorum yap</Button>
        </header>
      </div>
    );
  }
}

export default App;
