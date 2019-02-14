import React, {Component} from "react";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

export class Users extends Component {

  render() {
        return (
          <div>
            <Typography variant="headline">Users</Typography>
            <Card>
              <CardContent>

              </CardContent>
            </Card>
          </div>
        )
  };

}

Users.propTypes = {};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(Users);