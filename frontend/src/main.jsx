//main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login/Login.jsx'

import { createBrowserRouter,RouterProvider,} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Patient from './Components/Patient/Patient.jsx'
import CreatePatient from './Components/CreatePatient/CreatePatient.jsx'
// import EditPatient from './Components/EditPatient/EditPatient.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  }, 


  {
    path: "/patient",
    element: <Patient />,
  }, 

  { 
    path: "/create",
    element: <CreatePatient />,
  }, 



  // {
  //   path: "/dashboard/add_patient",
  //   element: <AddPatient />,
  // },

  // {
  //   path: "/add_patient",
  //   element: <PatientInfo />,
  // },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
