import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import router from "./Routes/Routes/routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
