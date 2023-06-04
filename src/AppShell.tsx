import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
function Home() {
  return (
    <div>
      <h1>LaravelPH: Home</h1>
      <p>Welcome to LaravelPH website</p>
      <p>The premiere community of Laravel developers in the Philippines.</p>
      <p>
        Site is being setup. For now use the <Link to="https://www.facebook.com/groups/laravelph/">LaravelPH</Link> facebook group to meet other artisans.
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

// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const AppShell = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
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
