import React, { Component } from "react";
import Book from "../Book/book";

class BookCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.targ.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const book = {
      title: this.state.title,
      author: this.state.author,
    };
    this.props.addNewBook(Book);
    this.setState({
      title: "",
      author: "",
    });
  }

  render() {
    return (
      <div>
        <hr />
        <center>
          <h3>Add a New Book</h3>
        </center>
        <form onSubmit={this.handleSubmit}>
          <div className="row col-align">
            <div className="col-md-4">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChang={this.handleChange}
              />
            </div>
            <div className="col-md-4">
              <label>Author:</label>
              <input
                type="text"
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-4">
              <input type="submit" value="add" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default BookCreator;
