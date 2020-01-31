import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
      
      
        <div className="nav-div">
        
          <nav >
            
            <ul className="nav-links">
              <Link to='/' classname="nav-buttons">
                <button onClick={props.showSearch} classname="nav-buttons"> Home </button>
              </Link>
              
              <Link to='/recipes'>
                <button onClick={props.showSearch} classname="nav-buttons"> Recipes </button>
              </Link>
              
              <Link to='/news'>
                <button onClick={props.hideSearch} classname="nav-buttons"> News </button>
              </Link>
            </ul>
            
          </nav>

        </div>
    
    )
  }
  
  export default Nav