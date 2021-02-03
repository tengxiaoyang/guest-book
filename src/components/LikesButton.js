import React from 'react';

// const NameCard = (props) => {
//   const { name, number, isHuman, tags } = props
  
//   return (
//     <div className="alert alert-success">
//       <h4 className="alert-heading">{name}</h4>
//       <ul>
//         <li>电话：{number}</li>
//         <li>{ isHuman ? '人类' : '外星生物' }</li>
//         <hr/>
//         <p>
//           { tags.map((tag, index) => (
//             <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
//           ))}
//         </p>
//       </ul>
//     </div>
//   )
// }

class LikesButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    // this.increaseLikes = this.increaseLikes.bind(this)
  }
  increaseLikes() {
    console.log(1234)
    // alert(1234)
    console.log(this)
    this.setState({
      likes: ++ this.state.likes
    })
  }
  render() {
    const { name, number, isHuman, tags } = this.props
    return (
      <div className="likes-button-component">
        <button 
          type="button" 
          className="btn btn-outline-primary byn-lg"
          // onClick={this.increaseLikes}
          onClick={() => { this.increaseLikes() }}
        >
        👍 {this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesButton;