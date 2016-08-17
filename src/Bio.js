import React, { Component } from 'react'

class Bio extends Component {

  render () {
    const bio = (this.props.bio)
    return <div className='Bio'>
    {bio}
    </div>
  }
}

export default Bio
