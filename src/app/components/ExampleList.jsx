/**
 * Created by leonardli on 3/25/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addExample} from '../actions/exampleActions';
class ExampleList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  };

  handleAddButtonClick = () => {
    if (this.state.inputValue) {
      this.props.dispatch(addExample(this.state.inputValue));
    }
  };

  render() {
    const examples = this.props.examples.toList();
    return (
      <div>
        <span>Examples: </span>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>{example.get('id')} - {example.get('name')}</li>
          ))}
        </ul>
        <input type="text" onChange={this.handleInputChange}/>
        <button onClick={this.handleAddButtonClick}>Add</button>
      </div>
    )
  }
}

export default connect(state => ({examples: state.examples}))(ExampleList);