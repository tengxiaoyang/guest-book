import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentBoxUncontrolled from './components/CommentBoxUncontrolled';
import CommentList from './components/CommentList';
const tags = ['恐龙', '足球小子']

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        'this is my first reply',
        'this is my second reply',
        'this is my third reply',
        'this is my fourth reply',
        'this is my fifth reply',
        'this is my sixth reply',
      ]
    }
    this.addComment = this.addComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  deleteComment(indexToDelete) {
    console.log(indexToDelete)
    this.setState(
      this.state.comments.splice(indexToDelete, 1)
    )
  }
  render() {
    const { comments } = this.state
    return (
      <div>
        <CommentList 
          comments={comments} 
          onDeleteComment={this.deleteComment}
        />
        <CommentBoxUncontrolled 
          componentsLength={comments.length} 
          onAddComment={this.addComment}
        />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <NameCard name="King" number={1234567890} isHuman tags={tags} />
//       <LikesButton />
//       <DigitalClock />
//       <CommentBox />
//       <CommentBoxUncontrolled />
//     </div>
//   );
// }

export default App;
