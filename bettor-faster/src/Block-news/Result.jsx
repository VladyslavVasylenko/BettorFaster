import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Result extends Component {
  render() {
    return (
      <div className="result">
        {/* { this.props &&
          <div className="result__box">
            <div className="result__box">
              <p className="result__title">{this.props.title}</p>
              <p className="result__text subtitle">{this.props.body}</p>
            </div>
            <div className="result__box">
              <p className="result__title">{this.props.title}</p>
              <p className="result__text subtitle">{this.props.body}</p>
            </div>
            <div className="result__box">
              <p className="result__title">{this.props.title}</p>
              <p className="result__text subtitle">{this.props.body}</p>
            </div>
            <div className="result__box">
              <p className="result__title">{this.props.title}</p>
              <p className="result__text subtitle">{this.props.body}</p>
            </div>
            <div className="result__box">
              <p className="result__title">{this.props.title}</p>
              <p className="result__text subtitle">{this.props.body}</p>
            </div>
            <div className="result__box">
              <p className="result__title">{this.props.title}</p>
              <p className="result__text subtitle">{this.props.body}</p>
            </div>
          </div>
        } */}
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image="https://picsum.photos/200"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom component="h2" className="title">
                {this.props.title}
              </Typography>
              <Typography component="p" className="text">
                {this.props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image="https://picsum.photos/200"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom component="h2" className="title">
                {this.props.title}
              </Typography>
              <Typography component="p" className="text">
                {this.props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image="https://picsum.photos/200"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom component="h2" className="title">
                {this.props.title}
              </Typography>
              <Typography component="p" className="text">
                {this.props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image="https://picsum.photos/200"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom component="h2" className="title">
                {this.props.title}
              </Typography>
              <Typography component="p" className="text">
                {this.props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image="https://picsum.photos/200"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom component="h2" className="title">
                {this.props.title}
              </Typography>
              <Typography component="p" className="text">
                {this.props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image="https://picsum.photos/200"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom component="h2" className="title">
                {this.props.title}
              </Typography>
              <Typography component="p" className="text">
                {this.props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  }
}

export default Result;