import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

class Header extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const {styles, handleChangeRequestNavDrawer} = this.props;

        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                maxHeight: 57
            },
            menuButton: {
                marginLeft: 10
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };

        return (
            <div>
                <AppBar
                    style={{...styles, ...style.appBar}}
                    iconElementLeft={
                        <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
                            <Menu color={white} />
                        </IconButton>
                    }
                    iconElementRight={
                        <div style={style.iconsRightContainer}>
                            <IconMenu color={white}
                                iconButtonElement={
                                    <IconButton><ViewModule color={white}/></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem key={1} primaryText="Application 1"/>
                                <MenuItem key={2} primaryText="Application 2"/>
                                <MenuItem key={3} primaryText="Application 3"/>
                            </IconMenu>
                            <IconMenu color={white}
                                iconButtonElement={
                                    <IconButton><MoreVertIcon color={white}/></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem key={1} primaryText="Sign out"/>
                            </IconMenu>
                        </div>
                    }
                />
            </div>
        );
    }
}

Header.propTypes = {
    styles: PropTypes.shape,
    handleChangeRequestNavDrawer: PropTypes.func.isRequired
};

Header.defaultProps = {
    styles: {}
};

export default Header;