import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {
  state = {
    open: false,
    vertical: null,
    horizontal: null,
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>
        <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'right' })}>
          Top-Right
        </Button>
        <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          Bottom-Right
        </Button>
        <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button>
        <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'left' })}>
          Bottom-Left
        </Button>
        <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'left' })}>
          Top-Left
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}


const Box = () => (
  <div className="box box-default">
    <div className="box-header">Positioned</div>
    <div className="box-body py-5">
      <PositionedSnackbar />
    </div>
  </div>
)

export default Box;
