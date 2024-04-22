import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Icons from "./components/Icons/Icons";
import Layout from "./components/Layout/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

export const StartPage = () => {
  return (
    <>
      <Form />
      <Header />
    </>
  );
};

export const ThankPage = () => {
  return <div>qsmdkshbhjbwjb</div>;
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route element={<StartPage />} path="/" />
            <Route element={<ThankPage />} path="/thankyou" />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
