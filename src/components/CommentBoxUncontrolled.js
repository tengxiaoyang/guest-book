import React from 'react';

class CommentBoxUncontrolled extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    alert(this.textInput.value)
    event.preventDefault()
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
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
          className="btn btn-primary">
          留言
        </button>
      </form>
    )
  }
}

export default CommentBoxUncontrolled;