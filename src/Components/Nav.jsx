import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
      
      
        <div className="nav-div">
        
          <nav >
            
            <ul className="nav-links">
              <Link to='/' >
                <li className="nav-links-individual"> Home </li>
              </Link>
              
              <Link to='/recipes'>
                <li> Recipes </li>
              </Link>
              
              <Link to='/news'>
                <li> News </li>
              </Link>
            </ul>
            
          </nav>

        </div>
    
    )
  }
  
  export default Nav