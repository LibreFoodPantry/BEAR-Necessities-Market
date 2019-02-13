import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import ThemeDefault from '../theme-defualt';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            navDrawerOpen: true
        };
    }

    componentWillReceiveProps() {
        this.state.navDrawerOpen = true;
    }

    handleChangeRequestNavDrawer() {
        const {navDrawerOpen} = this.state;
        this.state.navDrawerOpen = !navDrawerOpen;
    }

    render() {
        const {children} = this.props;
        const { navDrawerOpen } = this.state;
        const paddingLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            }
        };

        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Header styles={styles.header} handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}/>

                    <LeftDrawer navDrawerOpen={navDrawerOpen}/>

                    <div style={styles.container}>
                        {children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.element.isRequired,
};

export default App;