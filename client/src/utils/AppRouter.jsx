import React from "react";
import { Route, Switch } from "react-router-dom";
import LoadingPage from "../Views/Shared/LoadingPage";
import AnimePage from "../Views/Anime";

const Home = React.lazy(() => import("../Views/Home"));

const AppRouter = () => {
  return (
    <React.Suspense fallback={<LoadingPage fullPage={true} />}>
      <Switch>
        <Route path="/anime/:id" component={AnimePage} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Suspense>
  );
};

export default AppRouter;
