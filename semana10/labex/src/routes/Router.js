import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginAdmPage from "../pages/LoginAdmPage/LoginAdmPage";
import HomePage from "../pages/HomePage/HomePage";
import HomeAdmPage from '../pages/HomeAdmPage/HomeAdmPage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import ApprovedPage from '../pages/TripDetailPage/ApprovedPage'
import ToApprovePage from "../pages/TripDetailPage/ToApprovePage";
import TripDetailPage from "../pages/TripDetailPage/TripDetailPage";
import TripsPage from "../pages/TripsPage/TripsPage";
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import Error from '../pages/Error/Error'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginAdmPage />
        </Route>
        <Route exact path="/adm/viagens">
          <HomeAdmPage />
        </Route>      
        <Route exact path="/adm/viagens/detalhes/:id">
          <TripDetailPage />
        </Route>
        <Route exact path="/adm/viagens/detalhes/aprovados">
          <ApprovedPage />
        </Route>
        <Route exact path="/adm/viagens/detalhes/candidatos">
          <ToApprovePage />
        </Route>
        <Route exact path="/adm/viagens/novaviagem">
          <CreateTripPage />
        </Route>
        <Route exact path="/viagens">
          <TripsPage />
        </Route>
        <Route exact path="/viagens/formulario">
          <ApplicationFormPage />
        </Route>
        <Route>
            <Error />
        </Route>
     
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
