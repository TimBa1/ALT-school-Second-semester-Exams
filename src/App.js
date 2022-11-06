import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./ErrorBoundary";
import CustomHook from "./Pages/CustomHooks";
import NotFound from "./Pages/NotFound";
import UseReducer from "./Pages/UseReducer";
import { CustomHooksPath, ErrorBoundaryPath, NotFoundPath, UseReducerPath } from "./paths";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path={CustomHooksPath} element={<CustomHook />} />
              <Route path={UseReducerPath} element={<UseReducer />} />
              <Route path={NotFoundPath} element={<NotFound />} />
              <Route path={ErrorBoundaryPath} element={<ErrorBoundary />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default App;
