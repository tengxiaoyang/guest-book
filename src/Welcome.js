import React from 'react'

class Welcome extends React.Component {
  render() {
    const todoList = ['Learn React456', 'Learn Redux123'];
    const isLogin = false;
    const test = <h1>Hello React</h1>
    console.log(test)
    return (
      <div className="this" htmlFor="">
        <h1>Hello React</h1>
        <ul>
          {
            todoList.map(item => 
              <li>{item}</li>
            )
          }
        </ul>
        {
          isLogin ? <p>你已经登录</p> : <p>请登录</p>
        }
      </div>
    )
  }
}

export default Welcome