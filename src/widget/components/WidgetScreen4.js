import React, { Component } from 'react';
import ThumbsUpIcon from 'material-ui/svg-icons/action/thumb-up';

const styles = {
  container: {
    textAlign: 'center'
  }
};

export default () => (
  <div style={styles.container}>
    <h1>Thank You!</h1>
    <ThumbsUpIcon/>
  </div>
);

export const text = 'Screen 4';