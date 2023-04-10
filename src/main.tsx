import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from 'react-router-dom'

import "./style.css"

//components
import About from './about'
import CallOrEmailDot from './callOrEmailDot'
import Contact from './contact'
import Footer from './footer'
import Four04 from './404'
import Header from './header'
import Home from './home'
import Home2 from './home2'
import MouseShadow from './mouseShadow'
import Pricing from './pricing'
import Welcome from './welcome'

//assets
import assets from './assets/assetIndex'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home2 />,
  },
  {
    path: '/home',
    element: <Home2 />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Four04 />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
    <CallOrEmailDot />
    {/* <MouseShadow /> */}
  </React.StrictMode>,
)

// function MyComponent() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* your component content */}
//     </div>
//   );
// }