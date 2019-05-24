import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { withRouter } from 'react-router-dom';

class NavLeftList extends React.Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <ul className="list-unstyled list-inline">
                <li className="list-inline-item px-sm-1">

                    <div>
                        <Button href="#/app/home" className="header-btn navbar-brand">
                            <span className="mt-sm-2">Home</span>
                        </Button>
                    </div>
                </li>
                <li className="list-inline-item px-sm-1">

                    <div>
                        <Button href="#/app/articlepane" className="header-btn navbar-brand">
                            <span className="mt-sm-2">Articles</span>
                        </Button>
                    </div>
                </li>
                <li className="list-inline-item px-sm-1">

                    <div>
                        <Button href="#/app/aboutus" className="header-btn navbar-brand">
                            <span className="mt-sm-2">About</span>
                        </Button>
                    </div>
                </li>
            </ul>
        );
    }
}

export default withRouter(NavLeftList);
