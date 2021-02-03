import React from 'react';
import './CommentList.css';
import ThemeContext from '../theme-context';

class CommentList extends React.Component {
  constructor(props) {
    super(props)
    // this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }
  handleDeleteComment = (index) => {
    // alert(index)
    console.log(index)
    this.props.onDeleteComment(index)
    // event.preventDefault()
  }
  render() {
    const { comments } = this.props
    return (
      <ThemeContext.Consumer>
      {
        theme => {
          // console.log(theme)
          return (
            <div 
              className="comment-list-component"
              style={ {
                      backgroundColor: theme.bgcolor, 
                      color: theme.color,
                      margin: "0 0 -20px 0",
                    } }
            >
              <label className="comment-list-title">留言本</label>
              {/* <ul className="list-group mb-3" style={{margin:"0 0 -20px 0"}}> */}
              <ul className="list-group mb-3">
                {
                  comments.map((comment, index) => 
                    <li 
                      key={index} 
                      // className="list-group-item list-group-item-primary"
                      className={theme.listclassname}
                      // style={ {
                      //         backgroundColor: theme.bgcolor, 
                      //         color: theme.color,
                      //         margin: "0 0 -20px 0",
                      //       } }
                    >
                      {comment}
                      <button  
                        key={index}
                        className="delete-comment btn btn-danger"
                        onClick={this.handleDeleteComment.bind(this, index)}
                      >
                        删除
                      </button>
                    </li>
                  )
                }
              </ul>
            </div>
          )
        }
      }
      </ThemeContext.Consumer>
    )
  }
}


// const CommentList = ({ comments }) => {
//   return (
//     <div className="comment-list-component">
//       <label>评论列表</label>
//       <ul className="list-group mb-3">
//         {
//           comments.map((comment, index) => 
//             <li key={index} className="list-group-item list-group-item-primary">
//               {comment}
//               <button 
//                 className="delete-comment btn btn-danger"
//                 // onClick={(event)=>this.clicked("hello world",event)}
//                 onClick={() => { this.handleDeleteComment() }}
//               >删除</button>
//             </li>
//           )
//         }
//       </ul>
//     </div>
//   )
// }

export default CommentList;