import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginAdmPage from "../pages/LoginAdmPage";
import HomePage from "../pages/HomePage";
import HomeAdmPage from '../pages/HomeAdmPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import ApprovedPage from '../pages/AprovedPage'
import ToApprovePage from "../pages/ToApprovePage";
import TripDetailPage from "../pages/TripDetailPage";
import TripsPage from "../pages/TripsPage";
import CreateTripPage from '../pages/CreateTripPage'
import Error from '../pages/Error'

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
        <Route exact path="/adm">
          <HomeAdmPage />
        </Route>
        <Route exact path="/formulario">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/aprovados">
          <ApprovedPage />
        </Route>
        <Route exact path="/candidatos">
          <ToApprovePage />
        </Route>
        <Route exact path="/adm/detalhesviagem">
          <TripDetailPage />
        </Route>
        <Route exact path="/novaviagem">
          <CreateTripPage />
        </Route>
        <Route exact path="/viagens">
          <TripsPage />
        </Route>
        <Route>
            <Error />
        </Route>
     
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
