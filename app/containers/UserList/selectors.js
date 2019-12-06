import { createSelector } from 'reselect';

/**
 * Direct selector to the userList state domain
 */
const selectUserListDomain = (state) => state.get('userList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserList
 */

const makeSelectUserList = () => createSelector(
  selectUserListDomain,
  (substate) => substate.toJS()
);

export default makeSelectUserList;
export {
  selectUserListDomain,
};
