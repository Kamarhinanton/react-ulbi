import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth)
  if(isLoading){
    return (
      <div>
        Hey, I am loading...
      </div>
    )
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            path={route.path}
            element={<route.component/>}
            key={route.path}
          />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            path={route.path}
            element={<route.component/>}
            key={route.path}
          />
        )}
      </Routes>
  );
};

export default AppRouter;