import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class News extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
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

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.posts.length) {
      return <div>Didn't get a posts</div>;
    }
      return (
        <>
          <div className="result">
            {this.state.posts.map((post) => (
              <div key={post.id}>
                <Card className="main-container">
                  <CardActionArea className="container">
                  <CardMedia
                    className="media"
                    image= {`https://picsum.photos/200/200?random=${post.id}`}
                    title="Contemplative Reptile"
                  />

                    <CardContent>
                      <Typography gutterBottom component="h2" className="title">
                        {post.title}
                      </Typography>

                      <Typography component="p" className="text">
                        {post.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        </>
      );
    
  }
}