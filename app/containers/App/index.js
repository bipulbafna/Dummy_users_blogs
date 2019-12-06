/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import UserList from '../UserList/Loadable'
import Posts from '../UserPosts/Loadable'
import Blog from '../UserBlog/Loadable'

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/posts" component={Posts} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </AppWrapper>
  );
}
