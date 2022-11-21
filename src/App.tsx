import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { AppWrapper, ContentWrapper } from "./shared/styles/App.style";
import GlobalStyles from "./shared/styles/Global.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <NavBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route element={<RequireAuth />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
