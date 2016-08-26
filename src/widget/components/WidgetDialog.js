import React from 'react';
import Dialog from 'material-ui/Dialog';
import WidgetScreens from './WidgetScreens';

export default ({
  open,
  onRequestClose,
  screens
}) => (
  <Dialog
    title="Widget dialog"
    open={open}
    onRequestClose={onRequestClose}
  >
    <WidgetScreens screens={screens}/>
  </Dialog>
);