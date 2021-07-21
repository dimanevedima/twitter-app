import React from 'react';
import './search-panel.css';

const SearchPanel = ({onSearch}) =>{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     text: ''
  //   }
  //   this.textInput = React.createRef();
  // }
  const textInput = React.createRef();
  // updateSearch = (event) => {
  //   this.setState({
  //     text: this.textInput.current.value
  //   })
  // }

  return (
    <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск"
        onChange={() => onSearch(textInput.current.value)}
        ref = {textInput}
    ></input>
  )

  // render(){
  //
  // }
}

export default SearchPanel;
