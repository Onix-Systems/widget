import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import WidgetScreens from './WidgetScreens';

const render = ({
  open,
  onRequestClose,
  screens,
  width
}) => (
  <Dialog
    contentStyle={{ width }}
    title="Widget dialog"
    open={open}
    onRequestClose={onRequestClose}
  >
    <WidgetScreens screens={screens}/>
  </Dialog>
);

export default connect(
  ({ settings }) => ({
    width: settings.width
  })
)(render);