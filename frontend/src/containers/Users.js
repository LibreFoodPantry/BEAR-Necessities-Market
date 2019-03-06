import React, {Component} from "react";
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


export class Users extends Component {

  constructor(props) {
      super(props);

      this.state = {
          users: [],
      }
  }

  async componentWillMount() {
    await this.getUsers();
  }

  getUsers() {
    axios.get('/users/')
      .then(res => {
        console.log(res);
        let payload = res.data.users;
        this.setState({users: payload});
      });
  }

  render() {
        const {users} = this.state;

        return (
          <div>
            <Typography variant="h4" gutterBottom>Users In Database</Typography>
            <Typography variant="h7" gutterBottom>Dynamic example using axios to request data from flask.</Typography>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(u => (
                    <TableRow key={u.id}>
                      <TableCell component="th" scope="u">
                        {u.id}
                      </TableCell>
                      <TableCell align="right">{u.username}</TableCell>
                      <TableCell align="right">{u.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        )
  };

}

Users.propTypes = {

};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Users);