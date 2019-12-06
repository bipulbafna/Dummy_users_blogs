/**
 *
 * UserList
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
import makeSelectUserList from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchUserListData } from './actions'
import styled from 'styled-components';
import { Link, Button } from '@material-ui/core';

const Th = styled.th`
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
`
const Td = styled.td`
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
`

class UserList extends React.PureComponent {
  componentDidMount() {
    const { fetchUserListDataDispatch } = this.props;
    fetchUserListDataDispatch();
  }
  handleClick = (id) => () => {
    const { history } = this.props;
    history.push(`posts/${id}`)
  }
  render() {
    const { userlist: { users } } = this.props;
    return (
      <div>
        <Helmet>
          <title>UserList</title>
          <meta name="description" content="Description of UserList" />
        </Helmet>
        <h2> List of users</h2>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Company</Th>
              <Th> Blogs</Th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, company }) => (<tr key={id}>
              <Td>{name}</Td>
              <Td>{company.name}</Td>
              <Td>
                <Button onClick={this.handleClick(id)} color="primary">Check</Button>
              </Td>
            </tr>))}
          </tbody>
        </table>
      </div>
    );
  }
}

UserList.propTypes = {
  fetchUserListDataDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userlist: makeSelectUserList(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUserListDataDispatch: () => (dispatch(fetchUserListData()))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userList', reducer });
const withSaga = injectSaga({ key: 'userList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserList);
