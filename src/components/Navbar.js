import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom'
export default class Navbar extends PureComponent {
 
  render() {

 
    return (
      <div>
      <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand " href="/">Navbar</a>
            <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
              <span className="navbar-hrefggler-icon"></span>
            </buthrefn>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${this.props.home}`} aria-current="page" to="/" > Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.props.sport}`} aria-current="page" to="/sport" >Sport</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.props.buis}`} aria-current="page" to="/business"> Business</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.props.ent}`} aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
              
               
                <li className="nav-item">
                  <Link className={`nav-link ${this.props.sci}`} aria-current="page" to="/science">Science</Link>
                </li>
             
                {/* <li className="nav-item ">
                  <Link className={`nav-link ${this.props.home}`} aria-current="page" to="/technology">technology</Link>
                </li> */}


              </ul>
             
            </div>
          </div>
          <div className="form-check form-switch mx-2" >
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}  ></input>
      <label className={`form-check-label text-${this.props.mode=='light'?"dark":"light"}`} htmlFor="flexSwitchCheckDefault" >{`Enable ${this.props.mode==='light'?"Dark":"Light"} mode`}</label>
    </div>
        </nav>
      </div>
    )

  }
}
