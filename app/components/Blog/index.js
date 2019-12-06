/**
*
* Blog
*
*/

import React from 'react';
import { Grid, Button, Paper } from '@material-ui/core'



class Blog extends React.PureComponent {
  render() {
    const { blogData:{title,body,userId}, handleDeleteBlog } = this.props
    return (
      <React.Fragment>
        <h1>Blog</h1>
        <Paper>
          <Grid container>
            <Grid item xs={10} style={{ padding: "0px 20px" }}>
              <span >
                <h2>{title}</h2>
                <p>{body}</p>
              </span>
            </Grid>
            <Grid item xs={2} style={{ marginTop: '30px' }}>
              <Button color="secondary" variant="contained" onClick={handleDeleteBlog(userId)}>Delete</Button>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}


export default Blog;
