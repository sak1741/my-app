import React, { Component } from 'react'
import spin from './spin.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'> 
      
        {/* <img src={require("./spin.gif")}></img> */}
        <img src={spin}></img>
      </div>
    )
  }
}

export default Spinner
