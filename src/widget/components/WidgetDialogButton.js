import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import WidgetDialog from './WidgetDialog';
import WidgetScreen1 from './WidgetScreen1';

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
    const screens = [
      {
        text: 'Screen 1',
        screen: <WidgetScreen1/>
      },
      {
        text: 'Screen 1',
        screen: <WidgetScreen1/>
      },
      {
        text: 'Screen 1',
        screen: <WidgetScreen1/>
      }
    ];

    return (
      <div>
        <RaisedButton
          label="Widget button"
          onTouchTap={() => this.openDialog()}
        />
        <WidgetDialog
          open={this.state.open}
          onRequestClose={() => this.closeDialog()}
          screens={screens}
        />
      </div>
    );
  }
}