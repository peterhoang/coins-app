import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from '../pages/home'
import Normalized from '../pages/normalized'
import Altcoins from '../pages/altcoins'
import Header from '../../component/header'
import { DivContainer } from '../../component/styledComponents'

class App extends React.Component {
  render() {
    return (
      <DivContainer>
        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />      
        </Helmet>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/normalized' component={Normalized} />
          <Route path='/altcoins' component={Altcoins} />
        </Switch>
      </DivContainer>
    )
  }
}

export default App
