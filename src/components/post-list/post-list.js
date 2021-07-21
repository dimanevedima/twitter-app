import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';


const PostList = ({posts, onDelete, onImportant, onLike}) => {

  const postItems = posts.map(post => {
    const {id, ...other} = post;
  //  console.log(id);
    return (
      <li key = {id} className='list-group-item'>
        <PostListItem
        onDelete = {() => onDelete(id)} {...other}
        onImportant = {() => onImportant(id, "important")}
        onLike = {() => onLike(id, "like")}
        />
      </li>
    )
  })

    return (
      <div className="app-list list-gtoup">{postItems}</div>
    )

}

export default PostList;
