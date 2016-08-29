import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import { addTextBox, updateTextBox } from '../actions/TextBoxActions';

class WidgetScreen1 extends Component {
  render() {
    const { textBoxes, addTextBox, updateTextBox } = this.props;
    const ids = Object.keys(textBoxes);
    const values = ids.map(id => textBoxes[id].text);

    return (
      <div>
        {ids.map((id, index) =>
          <AutoComplete
            key={id}
            ref={id}
            hintText="Type anything"
            dataSource={values}
            searchText={textBoxes[id].text}
            onKeyUp={
              index === values.length - 1 ?
                addTextBox :
                e => e
            }
            onBlur={() => updateTextBox(id, this.refs[id].state.searchText)}
          />
        )}
      </div>
    )
  }
}

export const text = 'Screen 1';

export default connect(
  ({ textBoxes }) => ({ textBoxes }),
  { addTextBox, updateTextBox }
)(WidgetScreen1);