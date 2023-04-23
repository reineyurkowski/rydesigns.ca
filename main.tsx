import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from 'react-router-dom'

import "./src/style.css"

//components
import Modules from './src/modules'

//assets
import assets from './src/assets/assetIndex'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Modules.Home2 />,
  },
  {
    path: '/home',
    element: <Modules.Home2 />,
  },
  {
    path: '/about',
    element: <Modules.About />,
  },
  {
    path: '/pricing',
    element: <Modules.Pricing2 />,
  },
  {
    path: '/contact',
    element: <Modules.Contact />,
  },
  {
    path: '*',
    element: <Modules.Four04 />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Modules.Header />
      <RouterProvider router={router} />
    <Modules.Footer />
    <Modules.CallOrEmailDot />
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