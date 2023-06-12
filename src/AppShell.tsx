import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'

function Home() {
  return (
    <div className="m-auto max-w-xs">
      <p>Welcome to LaravelPH website</p>
      <p>The premiere community of Laravel developers in the Philippines.</p>
      <p>
        Site is being setup. For now use the <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          to="https://www.facebook.com/groups/laravelph/">LaravelPH</Link> facebook group to meet other artisans.
      </p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}


const AppShell = () => {

  return (
    <>

      <Router>
        <div className="items-center bg-white">
          <nav className="bg-white border-gray-200">
            <Header />

          </nav>
          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </div>
        </div>
      </Router>
      </>
  )
}

//function Dashboard() {
//  return (
//    <div>
//      <h2>Dashboard</h2>
//    </div>
//  )
//}
export default AppShell
