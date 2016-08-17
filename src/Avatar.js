import React, { Component } from 'react'

class Avatar extends Component {

  render () {
    return <div className='Avatar'>
      <img src={`https://avatars1.githubusercontent.com/u/20462027?v=3&s=460${this.props.id}?v=3`} alt=""/>
    </div>
  }
}

export default Avatar
