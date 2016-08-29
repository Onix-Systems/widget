import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import WidgetDialog from './WidgetDialog';

export default class WidgetDialogButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  openDialog() {
    this.setState({ open: true });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { screens } = this.props;

    return (
      <div>
        <RaisedButton
          label="Widget button"
          onTouchTap={() => this.openDialog()}
        />
        <WidgetDialog
          open={open}
          onRequestClose={() => this.closeDialog()}
          screens={screens}
        />
      </div>
    );
  }
}