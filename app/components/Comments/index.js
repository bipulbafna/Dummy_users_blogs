/**
*
* Comments
*
*/

import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Icon, Paper } from '@material-ui/core';


class Comments extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { commentList } = this.props;
    return (<React.Fragment>
      <hr />
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<Icon>^</Icon>}>
          <h2>Comments</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {commentList.length > 0 && commentList.map((item) => (
            <Paper key={item.id} style={{ padding: '0px 20px' }}>
              <h2>{item.email.split("@")[0]}</h2>
              <p>{item.body}</p>
            </Paper>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
    );
  }
}

Comments.propTypes = {

};

export default Comments;
