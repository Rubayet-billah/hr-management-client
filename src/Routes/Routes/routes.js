import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainlayOut from "../../Layouts/MainLayout/MainlayOut";
import Login from "../../Pages/Authentication/Login/Login";
import Admins from "../../Pages/Dashboard/Admins/Admins";
import Candidates from "../../Pages/Dashboard/Candidates/Candidates";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Departments from "../../Pages/Dashboard/Departments/Components/Departments";
import Employees from "../../Pages/Dashboard/Employess/Employees";
import Holidays from "../../Pages/Dashboard/Holidays/Holidays";
import Home from "../../Pages/Homepage/Home/Home";
import Payroll from "../../Pages/Dashboard/Payroll/Payroll";
import Accounts from "../../Pages/Dashboard/Accounts/Accounts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/employees",
        element: <Employees></Employees>,
      },
      {
        path: "/dashboard/payroll",
        element: <Payroll></Payroll>,
      },
      {
        path: "/dashboard/admins",
        element: <Admins></Admins>,
      },
      {
        path: "/dashboard/candidates",
        element: <Candidates></Candidates>,
      },
      {
        path: "/dashboard/departments",
        element: <Departments></Departments>,
      },
      {
        path: "/dashboard/accounts",
        element: <Accounts></Accounts>,
      },
      {
        path: "/dashboard/holidays",
        element: <Holidays></Holidays>,
      },
    ],
  },
]);

export default router;
