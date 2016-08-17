import React, { Component } from 'react'
import Avatar from './Avatar'
import Bio from './Bio'
import Followers from './Followers'
import Public_Repos from './Public_Repos'
import 'whatwg-fetch'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: 'ohmattschwartz',
      userData: {}
    }
  }

  componentDidMount () {
    fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ userData: data })
        console.log(data)
      })
  }

  render () {
    return <div className='App'>
      <Avatar id={this.state.userData.id} />
      <p>Biography:</p>
      <Bio bio={this.state.userData.bio} />
      <p>Followers:</p>
      <Followers url={this.state.userData.followers_url} />
      <p>Repositories:</p>
      <Public_Repos url={this.state.userData.repos_url} />
      <div className='Footer'>
      <p><img src="frontend.png" alt=""/></p>
      </div>
    </div>
  }
}

export default App
