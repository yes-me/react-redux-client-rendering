import React, {Component} from 'react';
import {Link} from 'react-router';

/**
 * footer Component
 */
export default class Aside extends Component {
  /**
   * render
   * return {ReactElement} markup
   */
  render() {
    const style = {
        footer: {
            position: 'fixed',
            bottom: 0,
            width: '100%',
            height: 80,
            backgroundColor: '#000',
            opacity: 0.8,
            fontSize: '14px'
        },
        footerContent: {
            maxWidth: 1280,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        navWrapper: {
            display: 'flex',
            flexDirection: 'row',
            listStyle: 'none',
            paddingTop: 20
        },
        navLink: {
            paddingRight: 30,
            paddingLeft: 30
        },
        copyRight: {
           paddingLeft: 50,
           color: '#ccc',
           fontSize: '12px'
        }
    }
    
    return (
      <footer style={style.footer}>
        <div style={style.footerContent}>
          <ul style={style.navWrapper}>
            <li style={style.navLink}><Link to="/" activeClassName="active">Home</Link></li>
            <li style={style.navLink}><Link to="/about" activeClassName="active">About</Link></li>
            <li style={style.navLink}><Link to="/contact-us" activeClassName="active">Contact Us</Link></li>
            <li style={style.copyRight}>Copyright © 2017 Amy Huang</li>
          </ul>
        </div>
      </footer>
    );
  }
}
