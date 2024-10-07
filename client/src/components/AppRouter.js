

import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { MAIN_PAGE } from "../utils/consts";
import MainPage from "../pages/MainPage";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    const {pet} = useContext(Context)
    console.log(pet)
    return (
        <Routes>
           {user.isAuth && authRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>} exact />
           )}
           {publicRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>} exact />
           )}
           <Route path="*" element={<Navigate to={MAIN_PAGE} />}/>
        </Routes>
    );
});

export default AppRouter;