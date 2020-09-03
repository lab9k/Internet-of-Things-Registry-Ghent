import React from 'react'
import logo from '../../icons/logo--cyan.svg'

export default function AboutPage() {
  return (
    <div className="container">
      <div className="row">
        <img className="col-1" alt="logo stad gent" src={logo} />
        <div className="col-11">
          <h1>This is the about page</h1>
          <p>this is the about page content</p>
        </div>
      </div>
    </div>
  )
}
