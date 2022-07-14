import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

import MainPage from "./views/MainPage";
import MoviePage from "./views/MoviePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.77/dist/"
);

export default function App() {
  return (
    <AppContainer>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element={<MoviePage />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dfe6e9;
`;
