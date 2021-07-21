import React from 'react';
import './post-list-item.css';


const PostListItem = ({label, important, like, onDelete, onImportant, onLike}) => {
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
      classNames += ' important'
    }

    if(like){
      //cssText.backgroundColor = "red";
      classNames += ' like';
    }

    return (
      <div className={classNames}>
      <div  className="app-list-item-label" >{label}</div>
      <div className="d-flex justify-content-center align-items-center">
      <button
      onClick = {onImportant}
      type = "button"
      className="btn-star btn-sm"
      >
        <i className="fa fa-star"></i>
      </button>
      <button
      onClick = {onDelete}
      type = "button"
      className="btn-trash btn-sm"
      >
      <i className="fa fa-trash-o"></i>
      </button>
      <button
      onClick = {onLike}
      >
        <i className="fa fa-heart"></i>
      </button>
      </div>
      </div>
    )

}

export default PostListItem;
