import React from 'react'
import logo from '../../icons/logo--cyan.svg'

export default function AboutPage() {
  return (

    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <img alt="logo stad gent" src={logo} />
        </div>
        <div className="col">
          <h1>This is the about page</h1>
          <p>this is the about page content</p>
        </div>
      </div>
    </div>
  )
}
