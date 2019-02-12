import React from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

const LeftDrawer = (props) => {

    const menus = [
        { text: 'Examle Feature', icon: '', link: '/example' },
        { text: 'Login Page', icon: '', link: '/login' },
    ];

    const { navDrawerOpen } = props;

    const styles = {
        logo: {
            cursor: 'pointer',
            fontSize: 22,
            color: typography.textFullWhite,
            lineHeight: `${spacing.desktopKeylineIncrement}px`,
            fontWeight: typography.fontWeightLight,
            backgroundColor: blue600,
            paddingLeft: 40,
            height: 56,
            flexDirection: 'row'
        },
        avatar: {
            cursor: 'pointer',
            height: 50,
            flexDirection: 'row',
            paddingLeft: 15,
            marginTop: 40,
            marginBottom: 40,
            color: typography.textFullWhite,
        },
        menuItem: {
            color: white,
            fontSize: 14,
            flexDirection: 'row'
        },
        icon: {
            float: 'left',
            display: 'block',
            marginRight: 15,
            boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
        },
        span: {
            paddingTop: 12,
            display: 'block',
            color: 'white',
            fontWeight: 300,
            textShadow: '1px 1px #444'
        }
    };

    return (
        <Drawer
            docked
            open={navDrawerOpen}>
            <div style={styles.logo}>
          Material Admin
            </div>
            <div style={styles.avatar}>
                <Avatar src="https://via.placeholder.com/50" size={50}/>
            </div>
            <div>
                {menus.map((menu) =>
                    <MenuItem
                        style={styles.menuItem}
                        primaryText={menu.text}
                        leftIcon={menu.icon}
                    />
                )}
            </div>
        </Drawer>
    );

};

LeftDrawer.propTypes = {
    navDrawerOpen: PropTypes.bool,
};

LeftDrawer.defaultProps = {
    navDrawerOpen: true,
};

export default LeftDrawer;