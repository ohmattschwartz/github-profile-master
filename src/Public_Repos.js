import React, { Component } from 'react'
import 'whatwg-fetch'

class Public_Repos extends Component {

  constructor () {
    super()
    this.state = {
      repos: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.url !== undefined) {
      fetch(nextProps.url + '?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4')
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({ repos: data })
        })
    }
  }

  render () {
    const reposList = this.state.repos.map((publicRepositories) => {
      return <li key={publicRepositories.name}><a href={publicRepositories.svn_url}>{publicRepositories.name}</a></li>
    })

    return <ul className='Public_Repos'>
      {reposList}
    </ul>
  }
}

export default Public_Repos
