import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

class CreatePost extends Component {
  render() {
    const {
      handleInputChange, 
      handleCreatePost,
      title,
      body
    } = this.props;

    return (
      <form onSubmit={handleCreatePost}>
        <div>
          <Input 
            name="title"
            placeholder="Title"
            variant="outlined"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input 
              name="body"
              placeholder="Body"
              variant="outlined"
              value={body}
              onChange={handleInputChange}
            />
        </div>
        
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  }
}

export default CreatePost;