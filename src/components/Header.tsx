import { Link } from 'react-router-dom'

import '../styles/header.scss'
import { FC } from 'react'

const Header: FC = () => {

  return (
    <header className="header justify-content">

        <ul className="flex">
            <li>
                <a href="/" className="logo-section">
                  <h1 className="text-xl">Laravel Philippines</h1>
                </a>
              </li>
            <li className="mr-5">&nbsp;</li>
              <li className="mr-2 space-x-1">
                <Link to="/">Home</Link>
              </li>
              <li  className="mr-2">
                <Link to="/login">Login</Link>
              </li>
              <li  className="mr-2">
                <Link to="/signup">Register</Link>
              </li>
              <li className="mr-2">
                <Link to="/about">About</Link>
              </li>
      </ul>
    </header>
  )
}
export default Header
