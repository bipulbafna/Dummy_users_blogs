/**
 *
 * UserBlog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserBlog from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getOrDeleteBlog, fetchComments } from './actions'
import Blog from '../../components/Blog/Loadable'
import Comments from '../../components/Comments/Loadable'
import { Grid, Snackbar } from '@material-ui/core';

export class UserBlog extends React.PureComponent {
  state = { open: false }
  componentDidMount() {
    const { fetchCommentsDispatch, getOrDeleteBlogDispatch } = this.props;
    const index = +window.location.pathname.replace("/blog/", "");
    getOrDeleteBlogDispatch(index)
    fetchCommentsDispatch(index);
  }
  handleDelete = (id) =>()=> {
    const { getOrDeleteBlogDispatch, history } = this.props;
    getOrDeleteBlogDispatch(id, "DELETE");
    this.setState({ open: true })
    setTimeout(() => history.push(`/posts/${id}`), 1000)
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const { userblog: { blog, comments } } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Blog blogData={blog} handleDeleteBlog={this.handleDelete} />
          </Grid>
          <Grid item xs={12}>
            <Comments commentList={comments} />
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={this.handleClose}
          message={<span >Deleting..</span>}
        />
      </React.Fragment>
    );
  }
}

UserBlog.propTypes = {
  getOrDeleteBlogDispatch: PropTypes.func.isRequired,
  fetchCommentsDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userblog: makeSelectUserBlog(),
});

function mapDispatchToProps(dispatch) {
  return {
    getOrDeleteBlogDispatch: (id, method) => dispatch(getOrDeleteBlog(id, method)),
    fetchCommentsDispatch: (id) => dispatch(fetchComments(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userBlog', reducer });
const withSaga = injectSaga({ key: 'userBlog', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserBlog);
