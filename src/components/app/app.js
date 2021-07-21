import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {label:"Quae culpa irure irure minim quorum quorum labore anim duis!!", important: true, like: true, id:1},
        {label:"Labore export amet quem veniam anim quae magna tamen sint tempor tempor??", important: false, like: false, id:2},
        {label:"Aute velit minim veniam velit esse illum..", important: false, like: false, id:3},
        {label:"Veniam quorum eram quorum quis export esse aliqua tamen essere)", important: false, like: true, id:4},
        {label:"Magna veniam legam eram eram.", important: true, like: false, id:5},
      ],
      text: '',
      filter: 'all'

    };
  //  this.onDelete = this.onDelete.bind(this);
  //  this.makeStatus = this.makeStatus.bind(this);
//  this.onAdd = this.onAdd.bind(this);
      this.currentId = 5;
  }

  onDelete = (id) => {
    const {data} = this.state;
    const index = data.findIndex(item => item.id === id);
    // const index = data.filter(item => {  // возвратит массив с элементом!! а не индекс
    //    return item.id === id;
    //  });
    //const index = data.find(item => item.id === id); // возвратит элемент!! а не индекс
    this.setState({
      data: [...data.slice(0, index), ...data.slice(index + 1)]
    })
   console.log(index);
  }

  // makeImportant = (id) => {
  //   const {data} = this.state;
  //   // I variant
  //   // const newImportant = data.filter(item => item.id === id);
  //   // newImportant[0].important = !newImportant[0].important;
  //   // console.log(newImportant);
  //   // this.setState({
  //   //   data: [...data.slice(0, newImportant[0].id - 1), newImportant[0], ...data.slice(newImportant[0].id)]
  //   // })
  //
  //   // II variant
  //   const index = data.findIndex(item => item.id === id);
  //   const newImportant = {...data[index], important:!data[index].important};
  //   this.setState({
  //     data: [...data.slice(0, index), newImportant, ...data.slice(index+1)]
  //   })
  // }
  //
  // // makeLike = () => {
  // //
  // // }

  makeStatus = (id, status) => {

    const {data} = this.state;
    const index = data.findIndex(item => item.id === id);
  //  status = status.replace(/"/g);
  //  console.log(status);
    let newImportant = {};
    switch (status) {
      case 'like':
          newImportant = {...data[index], like:!data[index].like};
        break;
      case 'important':
          newImportant = {...data[index], important:!data[index].important};
        break;
      default:

    }

  //  console.log(newImportant);
    this.setState({
      data: [...data.slice(0, index), newImportant, ...data.slice(index+1)]
    })
  }

   onAdd = (input) => {
    //console.log(input.current.value);
    if (!input.current.value) {
      return alert('Empty!!!');
    }
    this.setState(({data, currentId}) => {
      const newItem = {
        label: input.current.value,
        important: false,
        like: false,
        id: ++this.currentId
      };
      const newData = [newItem, ...data];
      input.current.value = '';
      return {
        data: newData
      }
    })
  }

  updateSearch = (text) => {
  //  console.log(text);
    this.setState({
      text
    })

  }

  searchPost = (text, data) => {
    if (text.length === 0){
      return data;
    }
      //return data.filter(item => item.label.toLowerCase().includes(text.toLowerCase()) !== false);
        return data.filter(item => item.label.toLowerCase().match(text.toLowerCase()));
  //  return data.filter(post => post.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
  }

  filterPosts = (data, filter) => {
    if (filter === 'like') {
      return data.filter(item => item.like);
    }
    return data;
  }

  setFilter = (filter) => {
    this.setState({
      filter
    })
  }


  render(){

    const {data, text, filter} = this.state;
    const elements = this.filterPosts(this.searchPost(text, data), filter);
  //  console.log(elements);
    const liked = data.filter(post => post.like).length;
  //  console.log(liked);
    return (
      <div className='app'>
      <AppHeader count = {data.length} liked = {liked}/>
      <div className = "search-panel d-flex">
      <SearchPanel
        onSearch ={this.updateSearch}/>
      <PostStatusFilter
        filter = {filter}
        onFilter = {this.setFilter}
        />
      </div>
      <div className='addDiv'>
      <PostAddForm
        onAdd={this.onAdd}/>
      </div>
         <PostList
          posts = {elements}
          onDelete = {this.onDelete}
          onImportant = {this.makeStatus}
          onLike = {this.makeStatus} />
      </div>

    )
  }
}
