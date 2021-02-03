import React from 'react';
import ThemeContext from '../theme-context';

class CommentBoxUncontrolled extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeTheme = this.handleChangeTheme.bind(this)
  }
  handleSubmit(event) {
    // alert(this.textInput.value)
    if (this.textInput.value.length === 0) {
      alert("留言内容为空")
    } else {
      this.props.onAddComment(this.textInput.value)
      this.textInput.value = ''
      event.preventDefault()
    }
  }
  handleChangeTheme(theme) {
    this.props.onChangeTheme(theme)
  }
  render() {
    return (
      <ThemeContext.Consumer>
      {
        theme => {
          // console.log(theme)
          return (
            <form 
              className="p-3" 
              onSubmit={this.handleSubmit}
              style={ {
                      backgroundColor: theme.bgcolor, 
                      color: theme.color,
                    } }
            >
              <div className="form-group">
                <label>留言内容</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="请输入内容"
                  ref={(textInput) => {this.textInput = textInput}}
                >
                </input>
              </div>
              <button 
                type="submit"     
                // className="btn btn-primary"
                className={theme.classnames}
              >
                留言
              </button>
              <a
                className="btn btn-light"
                href="#theme-switcher"
                onClick={() => {
                  this.handleChangeTheme('light')
                }}
              >
                浅色主题
              </a>
              <a
                className="btn btn-secondary"
                href="#theme-switcher"
                onClick={() => {
                  this.handleChangeTheme('dark')
                }}
              >
                深色主题
              </a>
              <p>
                已有{this.props.componentsLength}条留言
              </p>
            </form>
          )
        }
      }
      </ThemeContext.Consumer>
    )
  }
}

export default CommentBoxUncontrolled;