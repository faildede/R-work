import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/FirstPage/Main";
import { SignUp }  from "./components/Auth/SignUp"
import MainCandidate from './components/СandidatePage/MainCandidate'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/Candidate/:id' element={<MainCandidate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
