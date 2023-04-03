import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import "./style.css"

//components
import Header from './header'
import Home from './home'
import Footer from './footer'
import Welcome from './welcome'
import Home2 from './home2'
import MouseShadow from './mouseShadow'
import About from './about'

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
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  {
    path: '/about',
    element: <About />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
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