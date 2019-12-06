import { createSelector } from 'reselect';

/**
 * Direct selector to the userPosts state domain
 */
const selectUserPostsDomain = (state) => state.get('userPosts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserPosts
 */

const makeSelectUserPosts = () => createSelector(
  selectUserPostsDomain,
  (substate) => substate.toJS()
);

export default makeSelectUserPosts;
export {
  selectUserPostsDomain,
};
