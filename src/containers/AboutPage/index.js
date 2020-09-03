import React from 'react'
import logo from '../../icons/logo--cyan.svg'

export default function AboutPage() {
  return (
    <div className="container">
      <row>
        <img  alt="logo stad gent" src={logo} />
        <div>
          <h1>This is the about page</h1>
          <p>this is the about page content</p>
        </div>
      </row>
    </div>


  )
}
