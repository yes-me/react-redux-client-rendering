import React, {PropTypes, Component} from 'react';
import { Link, IndexLink } from 'react-router';


export default class Header extends Component {
  render(){
    const style = {
        navContainer: {
            position: 'fixed',
            top: 0,
            width: '100%',
            background: '#000',
            opacity: 0.8,
            height: 50,
            zIndex: 10
        },
        navWrapper: {
            display: 'flex',
            flexDirection: 'row',
            listStyle: 'none',
            maxWidth: 1280,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        navLink: {
            paddingRight: 30,
            paddingLeft: 30
        }
    }
    
    return ( 
      <nav style={style.navContainer}> 
        <ul style={style.navWrapper}>
          <li style={style.navLink}><Link to="/" activeClassName="active">Home</Link></li>
          <li style={style.navLink}><Link to="/users" activeClassName="active">Users</Link></li>
          <li style={style.navLink}><Link to="/videos" activeClassName="active">Videos</Link></li>
        </ul>
      </nav>
    )
  }
  
}; 
