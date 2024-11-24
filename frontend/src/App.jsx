import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Signup = lazy(() => import("./Pages/Signup"));
const Login = lazy(() => import("./Pages/Login"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));

const App = () => {
  return (
    <div className="w-screen h-screen bg-[url('src/assets/background.jpg')] bg-cover bg-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
