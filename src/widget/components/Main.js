import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WidgetDialogButton from './WidgetDialogButton';
import WidgetScreen1, { text as text1 } from './WidgetScreen1';
import WidgetScreen2, { text as text2 } from './WidgetScreen2';
import WidgetScreen3, { text as text3 } from './WidgetScreen3';
import WidgetScreen4, { text as text4 } from './WidgetScreen4';

export default () => (
  <MuiThemeProvider>
    <WidgetDialogButton
      screens={[
        {
          text: text1,
          screen: <WidgetScreen1/>
        },
        {
          text: text2,
          screen: <WidgetScreen2/>
        },
        {
          text: text3,
          screen: <WidgetScreen3/>
        },
        {
          text: text4,
          screen: <WidgetScreen4/>
        }
      ]}
    />
  </MuiThemeProvider>
);