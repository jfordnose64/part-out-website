import React from 'react'
import About from '../src/pages/about/about.jsx'
import Home from '../src/pages/home/home'
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageNotFound from './pages/page-not-found/page-not-found.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="**">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
