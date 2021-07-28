import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import CreatePost from '../create-post';

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      loading: true,
      posts: [],
    };
  }

  async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const posts = await response.json();

    this.setState({
      posts,
      loading: false,
    });
  }

  handleCreatePost = (event) => {
    event.preventDefault();

    const { title, body, posts } = this.state;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((post) => {
        this.setState({ posts: [post, ...posts] });
      });
  }

  handleInputChange = (event) => {
    const { target: { name, value } } = event;

    this.setState({ [name]: value });
  }

  render() {
    const { posts, loading, title, body } = this.state;

    if (loading) {
      return (
        <div>
          <CircularProgress />
        </div>);
    }

    if (!posts.length) {
      return <div className="nopost">Didn't get a posts</div>;
    }

    return (
      <>
        <CreatePost 
          handleCreatePost={this.handleCreatePost}
          handleInputChange={this.handleInputChange}
          title={title}
          body={body}
        />

        <div className="result">
          {posts.map((post) => (
            <Card className="main-container" key={post.id}>
              <CardActionArea className="container">
                <CardMedia
                  className="media"
                  image={`https://picsum.photos/200/200?random=${post.id}`}
                  title="Contemplative Reptile"
                />
                <CardContent className="media">
                  <Typography gutterBottom component="h2" className="title">
                    {post.title}
                  </Typography>

                  <Typography component="p" className="text">
                    {post.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </>
    );
  }
}