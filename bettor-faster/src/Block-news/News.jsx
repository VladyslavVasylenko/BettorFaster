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
      item: [],
    };
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ 
      item: data, 
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.item.length) {
      return <div>Didn't get a posts</div>;
    } 
      return (
        <>
          <div className="result">
            {this.state.item.map((items) => (
              <div key={items.title + items.text}>
                <Card className="main-container">
                  <CardActionArea className="container">
                    <CardMedia
                      className="media"
                      image="https://picsum.photos/200"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom component="h2" className="title">
                        {items.title}
                      </Typography>
                      <Typography component="p" className="text">
                        {items.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
          <button className="btn">Next</button>
        </>
      );
    
  }
}