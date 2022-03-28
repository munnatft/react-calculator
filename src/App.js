
import Card from "./components/Card";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Card />} />
        <Route exact path="/error" element={<ErrorPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme = 'colored'
      />
    </div>
  );
}

export default App;
