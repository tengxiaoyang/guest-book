import React from 'react';

class DigitalClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
    // this.increaseLikes = this.increaseLikes.bind(this)
  }
  // increaseLikes() {
  //   console.log(1234)
  //   // alert(1234)
  //   console.log(this)
  //   this.setState({
  //     likes: ++ this.state.likes
  //   })
  // }
  componentDidUpdate(currentProps, currentState) {
    console.log(currentState)
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 3000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { name, number, isHuman, tags } = this.props
    return (
      <div className="digital-clock-component jumbotron">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default DigitalClock;