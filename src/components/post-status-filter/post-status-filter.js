import React, {Component} from 'react';
import './post-status-filter';


// export default class PostStatusFilter extends Component {
//     constructor(props){
//       super(props);
//       this.buttons = [
//         {name: 'all', label: 'All'},
//         {name: 'like', label: 'Liked'}
//       ]
//     }
//   render () {
//
//       const buttons = this.buttons.map(btns => {
//       const active = this.props.filter === btns.name;
//       const clazz = active ? 'btn-info' : 'btn btn-outline-secondary' ;
//
//                   return (
//                     <button
//                     key = {btns.name}
//                     type = "button"
//                     className = {`btn ${clazz}`}
//                     onClick = {() => this.props.onFilter(btns.name)}
//                     >
//                     {btns.label}
//                     </button>
//                   )
//
//
//     })
//
//     return (
//       <div className="btn-group">
//       {buttons}
//       </div>
//     )
//   }
// }

const PostStatusFilter = ({onFilter, filter}) => {
      const buttons = [
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'}
      ]

      const buttonsRender = buttons.map(btns => {
      const active = filter === btns.name;
      const clazz = active ? 'btn-info' : 'btn btn-outline-secondary' ;

                  return (
                    <button
                    key = {btns.name}
                    type = "button"
                    className = {`btn ${clazz}`}
                    onClick = {() => onFilter(btns.name)}
                    >
                    {btns.label}
                    </button>
                  )


    })

    return (
      <div className="btn-group">
      {buttonsRender}
      </div>
    )

}
export default  PostStatusFilter;
