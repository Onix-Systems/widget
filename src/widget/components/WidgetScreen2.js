import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const render = ({
  textBoxes
}) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableHeaderColumn>Text</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      {Object.keys(textBoxes).map(id =>
        textBoxes[id].text ?
          <TableRow key={id}>
            <TableRowColumn>{textBoxes[id].text}</TableRowColumn>
          </TableRow> :
          null
      )}
    </TableBody>
  </Table>
);

export const text = 'Screen 2';

export default connect(
  ({ textBoxes }) => ({ textBoxes }),
)(render);