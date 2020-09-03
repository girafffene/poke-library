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
    <Router>
      <div>
        {/* adding routes for pages */}
        <Route exact path="http://girafffene.github.io/poke-library/" component={Home} />
        <Route exact path="http://girafffene.github.io/poke-library/page2" component={SecondPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page3" component={ThirdPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page4" component={FourthPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page5" component={FifthPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page6" component={SixthPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page7" component={SeventhPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page8" component={EighthPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page9" component={NinthPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page10" component={TenthPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page11" component={EleventhPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page12" component={TwelfthPage} />
        <Route exact path="http://girafffene.github.io/poke-library/page13" component={ThirteenthPage} />
      </div>
    </Router>
  )
}
