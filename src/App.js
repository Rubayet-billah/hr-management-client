import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import router from "./Routes/Routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}
export default App;
