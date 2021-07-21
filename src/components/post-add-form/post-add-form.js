import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.textInput = React.createRef();
  }

  onChange = (event) => {
    this.setState({
      //text: event.target.value
      text: this.textInput.current.value
    })
  }


  render () {

    return (
      <div
      className = "bottom-panel d-flex">
      <input
       placeholder="Add tweet"
       onChange = {this.onChange}
       className = "form-control new-post-label"

       ref={this.textInput}
       ></input>
      <button
        className= "btn btn-outline-secondary"
        onClick = {() => this.props.onAdd(this.textInput)}
      >Add</button>
      </div>
    )
  }
}
