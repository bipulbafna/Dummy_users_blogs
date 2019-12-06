/**
 *
 * UserPosts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserPosts from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchBlogs } from './actions'
import { Paper, Button } from '@material-ui/core';

export class UserPosts extends React.PureComponent {

  componentDidMount() {
    const { fetchBlogsDispatch } = this.props;
    const userId = +window.location.pathname.replace("/posts/", "");
    fetchBlogsDispatch(userId);
  }
  handleClick = (id) => () => {
    const { history } = this.props
    history.push(`/blog/${id}`)
  }
  render() {
    const { userposts: { blogs } } = this.props;
    return (
      <div>
        <Helmet>
          <title>UserPosts</title>
          <meta name="description" content="Description of UserPosts" />
        </Helmet>
        <h1>Blogs Library</h1>
        {blogs.length > 1 &&
          blogs.map((item) => <Paper key={item.id} style={{ padding: '10px 10px' }}>
            <h2>{item.title}</h2>
            <Button color="primary" onClick={this.handleClick(item.id)}>See blog</Button>
            <hr />
          </Paper>)

        }
      </div>
    );
  }
}

UserPosts.propTypes = {
  fetchBlogsDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userposts: makeSelectUserPosts(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchBlogsDispatch: (id) => dispatch(fetchBlogs(id))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userPosts', reducer });
const withSaga = injectSaga({ key: 'userPosts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserPosts);
