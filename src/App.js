import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import UserContext from "./context/UserContext";
import HomePage from "../src/pages/HomePage";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import OverlayProposals from "./components/Proposals/OverlayProposals";

export default function App() {
  const [showProposals, setShowProposals] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <OverlayProposals showProposals={showProposals} setShowProposals={setShowProposals} />
      <UserContext.Provider value={{ showProposals, setShowProposals }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
