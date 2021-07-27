import React, { Component }  from "react";

class BlockMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  handlePostSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        userId: 1,
      }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  handleInputChange = (event) => {
    const { target: { name, value } } = event;

    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    alert("Submit bro");
  }

  render() {
    return (
      <>
        <form action="" className="form" onSubmit={this.handleFormSubmit}>
          <input
            className="form-input-text"
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Title"
            required
          />

          <input
            className="form-input-text"
            value={this.state.body}
            name="body"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Body"
            required
          />

          <button type="submit" name="submit" className="form-btn">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default BlockMessage;