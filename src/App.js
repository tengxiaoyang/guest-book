import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentBoxUncontrolled from './components/CommentBoxUncontrolled';
import CommentList from './components/CommentList';
import ThemeContext from './theme-context';
import ThemedBar from './components/ThemedBar';
const tags = ['恐龙', '足球小子'];
const themes = {
  light: {
    classnames: 'btn btn-primary btn-block mb-3',
    bgcolor: '#eeeeee',
    color: '#000',
    listclassname: 'list-group-item list-group-item-primary'
  },
  dark: {
    classnames: 'btn btn-secondary btn-block mb-3',
    bgcolor: '#222222',
    color: '#fff',
    listclassname: 'list-group-item list-group-item-secondary'
  },
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
      comments: [
        'this is my first reply',
        'this is my second reply',
        'this is my third reply',
        'this is my fourth reply',
        'this is my fifth reply',
        'this is my sixth reply',
      ]
    }
    // this.state = {
    //   comments: [
    //     'this is my first reply',
    //     'this is my second reply',
    //     'this is my third reply',
    //     'this is my fourth reply',
    //     'this is my fifth reply',
    //     'this is my sixth reply',
    //   ]
    // }
    this.addComment = this.addComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
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
  changeTheme(theme) {
    this.setState({
      theme,
    })
  }
  render() {
    const { comments } = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div
          style={ {
                  backgroundColor: themes[this.state.theme].bgcolor, 
                  // color: theme.color,
                  height: "100vh"
                } }
        >
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <a
              className="btn btn-light"
              href="#theme-switcher"
              onClick={() => {
                this.changeTheme('light')
              }}
            >
              浅色主题
            </a>
            <a
              className="btn btn-secondary"
              href="#theme-switcher"
              onClick={() => {
                this.changeTheme('dark')
              }}
            >
              深色主题
            </a>
          </header> */}
          {/* <ThemedBar /> */}
          <CommentList 
            comments={comments} 
            onDeleteComment={this.deleteComment}
          />
          <CommentBoxUncontrolled 
            componentsLength={comments.length} 
            onAddComment={this.addComment}
            onChangeTheme={this.changeTheme}
          />
        </div>
      </ThemeContext.Provider>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
//       <NameCard name="King" number={1234567890} isHuman tags={tags} />
//       <LikesButton />
//       <DigitalClock />
//       <CommentBox />
//       <CommentBoxUncontrolled />
//     </div>
//   );
// }

export default App;
