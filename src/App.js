import { Children } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>{Children}</RouterProvider>
    </div>
  );
}
export default App;
