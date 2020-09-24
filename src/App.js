import React, { useState } from 'react'
import Nav from './NavComponent/Nav'
import FirstSection from './FirstSectionComponent/FirstSection'
import Footer from './FooterComponent/Footer'
import { Route, Switch} from 'react-router-dom'

function App() {
  const [current, setCurrent] = useState("Home")

  return (
  <div className="container">
    <Nav curr={current} setCurr={setCurrent} />
    <Switch>

      <Route exact path="/" 
        render={(props) =>
          <React.Fragment>
            <FirstSection {...props} title="Home" />
            <FirstSection {...props} title="Home" />
            <FirstSection {...props} title="Home" />
            <FirstSection {...props} title="Home" />
            <FirstSection {...props} title="Home" />
          </React.Fragment>          
        }
       />

      <Route path="/tutorials"
        render={(props) =>
          <React.Fragment>
            <FirstSection {...props} title="Tutorials" />
            <FirstSection {...props} title="Tutorials" />
            <FirstSection {...props} title="Tutorials" />
            <FirstSection {...props} title="Tutorials" />
            <FirstSection {...props} title="Tutorials" />
          </React.Fragment>          
        }
       />

      <Route path="/about"
        render={(props) =>
          <React.Fragment>
            <FirstSection {...props} title="About" />
            <FirstSection {...props} title="About" />
            <FirstSection {...props} title="About" />
            <FirstSection {...props} title="About" />
            <FirstSection {...props} title="About" />
          </React.Fragment>          
        }
       />

      <Route path="/more"
        render={(props) =>
          <React.Fragment>
            <FirstSection {...props} title="More" />
            <FirstSection {...props} title="More" />
            <FirstSection {...props} title="More" />
            <FirstSection {...props} title="More" />
            <FirstSection {...props} title="More" />
          </React.Fragment>          
        }
       />

    </Switch>
    <Footer />
  </div>
  )
}

export default App
