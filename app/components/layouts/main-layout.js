import React from 'react';
import { Link } from 'react-router';
import Header from '../common/Header'
import Footer from '../common/Footer'
import Aside from '../common/Aside'

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <Header />
      <section className="content-section">
        <Aside />
        <main>
          {props.children}
        </main>
      </section>
      <Footer />
    </div>
    );
}
