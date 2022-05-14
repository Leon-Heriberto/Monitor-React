import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import { Routes } from "../routes";

// pages
import DashboardOverview from "./dashboard/DashboardOverview";
import NotFoundPage from "./examples/NotFound";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import Registro from '../components/Registro';
import Incidencias from '../components/Incidencias';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar/>

        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
        
      </>
    )}
    />
  );
};

export default () => (
  localStorage.setItem("pathBaseToCallAPI", "em10vs0009:9898"),
  localStorage.setItem("line", "2"),
  localStorage.setItem("pathBaseToCallAPINotification", "em10vs0009:9393"),

  <Switch>
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Registro.path} component={Registro} />
    <RouteWithSidebar exact path={Routes.Incidencias.path} component={Incidencias} />

    <Redirect to={Routes.DashboardOverview.path} />
  </Switch>
);
