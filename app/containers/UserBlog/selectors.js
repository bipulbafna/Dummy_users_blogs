import { createSelector } from 'reselect';

/**
 * Direct selector to the userBlog state domain
 */
const selectUserBlogDomain = (state) => state.get('userBlog');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserBlog
 */

const makeSelectUserBlog = () => createSelector(
  selectUserBlogDomain,
  (substate) => substate.toJS()
);

export default makeSelectUserBlog;
export {
  selectUserBlogDomain,
};
