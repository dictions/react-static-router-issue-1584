import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from '@reach/router'
import {motion, AnimatePresence} from 'framer-motion'

import './app.css'


function App() {
  return (
    <Root>
      <h1>Framer Motion</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/generated-one">Generated Route One</Link>
        <Link to="/generated-two">Generated Route Two</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes
              path="*"
              render={({ routePath, getComponentForPath }) => (
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={routePath}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 4}}>
                    {getComponentForPath(routePath)}
                  </motion.div>
                </AnimatePresence>
              )}
            />
          </Router>
        </React.Suspense>
      </div>

      <h1>React Spring</h1>
    </Root>
  )
}

export default App
