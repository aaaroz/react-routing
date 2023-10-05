import { ToastContainer } from "react-toastify";
import SetupRouters from "./routers";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <SetupRouters />
    </>
  );
}

export default App;
