import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from '../home/home'
import Header from '../../component/header'

class App extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />      
        </Helmet>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </main>
    )
  }
}

export default App
