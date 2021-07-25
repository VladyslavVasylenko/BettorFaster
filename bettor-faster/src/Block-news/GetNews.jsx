import React, { Component } from "react";
import Result from './Result';

class GetNews extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      title: null,
      body: null,
      error: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(
      (posts) => {
        this.setState({
          title: posts[3].title,
          body: posts[3].body,
        });
        console.log(posts);
      },
      (error) => {
        this.setState({
          error
        });
      }
    );
  }

  render() {
    return (
      <>
        <div>
          <Result
            title={this.state.title}
            body={this.state.body}
          />
        </div>
      </>
    );
  }
}

export default GetNews;