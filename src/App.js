import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./ErrorBoundary";
import CustomHook from "./Pages/CustomHooks";
import NotFound from "./Pages/NotFound";
import UseReducer from "./Pages/UseReducer";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path='/' element={<CustomHook />} />
              <Route path='/usereducer' element={<UseReducer />} />
              <Route path='/found' element={<NotFound />} />
              <Route path='/error' element={<ErrorBoundary />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default App;
