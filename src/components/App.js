//imported dependencies
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//imported components
import Home from "./Home"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"
import FourthPage from "./FourthPage"
import FifthPage from "./FifthPage"
import SixthPage from "./SixthPage"
import SeventhPage from "./SeventhPage"
import EighthPage from "./EighthPage"
import NinthPage from "./NinthPage"
import TenthPage from "./TenthPage"
import EleventhPage from "./EleventhPage"
import TwelfthPage from "./TwelfthPage"
import ThirteenthPage from "./ThirteenthPage"

export default function App() {

  return (
    <Router basename="/poke-library">
      {/* adding routes for pages */}
      <Route exact path="/" component={Home} />
      <Route exact path="/page2" component={SecondPage} />
      <Route exact path="/page3" component={ThirdPage} />
      <Route exact path="/page4" component={FourthPage} />
      <Route exact path="/page5" component={FifthPage} />
      <Route exact path="/page6" component={SixthPage} />
      <Route exact path="/page7" component={SeventhPage} />
      <Route exact path="/page8" component={EighthPage} />
      <Route exact path="/page9" component={NinthPage} />
      <Route exact path="/page10" component={TenthPage} />
      <Route exact path="/page11" component={EleventhPage} />
      <Route exact path="/page12" component={TwelfthPage} />
      <Route exact path="/page13" component={ThirteenthPage} />
    </Router>
  )
}
