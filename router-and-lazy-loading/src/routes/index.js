import {lazy} from 'react'

import PathConstants from "./pathConstants"

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => delayForDemo(import('../pages/About')))

const routes = [
  {path: PathConstants.HOME, element: <Home />},
  {path: PathConstants.ABOUT, element: <About />},
]

export default routes

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  console.log(import('../pages/About'))
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  }).then(() => promise)
}