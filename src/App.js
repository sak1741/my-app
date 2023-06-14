
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Spinner from './components/Spinner'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
apiKey = process.env.REACT_APP_NEWS_API

  constructor(){
    super();
    console.log("Hello I am constructor of App class")
    this.state = {
       mode:'light',
    
    } 
    
  
}
 toggleMode =()=>{
  if(this.state.mode=='light'){
    
    this.setState({
           
    mode:'dark'
      })
    document.body.style.background = '#042743'
   
  }
  else{
    this.setState({
           
      mode:'light'
      })
    document.body.style.background = 'white'
   
  }
}
changeactive=()=>{
  this.setState({
           
   active:'true'
    })
}

  render() {
    return (

      <div style={{backgroundColor:''}}>
        <Router>
         
          <Switch>

            <Route exact path="/">
            <Navbar mode={this.state.mode}  toggleMode={this.toggleMode} home='active' sport=' ' buis=' ' ent=' ' sci=' '    ></Navbar>
              <News key="general" category='general'   apiKey={this.apiKey}  ></News>
           
            </Route>

            <Route exact path="/sport">
            <Navbar mode={this.state.mode}  toggleMode={this.toggleMode} home=' ' sport='active' buis=' ' ent=' ' sci=' '    ></Navbar>
              <News key="sport" category="sport"  apiKey={this.apiKey}></News>
            
            </Route>
            <Route exact path="/business">
            <Navbar mode={this.state.mode}  toggleMode={this.toggleMode} home=' ' sport=' ' buis='active' ent=' ' sci=' ' ></Navbar>
              <News key="business" category='business'  apiKey={this.apiKey}></News>
            </Route>
            <Route exact path="/entertainment">
            <Navbar mode={this.state.mode}  toggleMode={this.toggleMode} home=' ' sport=' ' buis=' ' ent='active' sci=' '    ></Navbar>
              <News key="entertainment" category='entertainment'  apiKey={this.apiKey}></News>
            </Route>
            <Route exact path="/science">
            <Navbar mode={this.state.mode}  toggleMode={this.toggleMode} home=' ' sport=' ' buis=' ' ent=' ' sci='active'  ></Navbar>
              <News key="science" category='science'  apiKey={this.apiKey}></News>
            </Route>

          

          </Switch>







        </Router>


      </div>










    )
  }
}
//Just to check that I am able to commit  or  not