import React, { Component }  from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
        showMessage: false,
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

    this.setState({showMessage: true});
  }

  render() {
    return (
      <>
        <form action='' className="form" onSubmit={this.handleFormSubmit}>
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
        {this.state.showMessage && 
          <div className="result">
            <Card className="main-container">
              <CardActionArea className="container">
                <CardMedia
                  className="media"
                  image= {`https://picsum.photos/200/200?random}`}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography gutterBottom component="h2" className="title">
                    {this.state.title}
                  </Typography>

                  <Typography component="p" className="text">
                    {this.state.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        }
      </>
    );
  }
}

export default BlockMessage;