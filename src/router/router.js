import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBer from "../components/NavBer";
import NewsDetail from "../page/NewsDetail";
import HomePage from "../page/HomePage";

const AppRoutes = () => {
  const publicRouter = [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/:id",
      component: NewsDetail
    }
  ];
  return (
    <BrowserRouter>
      <NavBer />
      <div className="container">
        <Routes>
          {publicRouter.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
