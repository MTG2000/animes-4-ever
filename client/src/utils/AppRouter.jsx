import React from "react";
import { Route, Switch } from "react-router-dom";
import LoadingPage from "../Views/Shared/LoadingPage";
import AnimePage from "../Views/Anime";
import AuthorPage from "../Views/Author";
import StudioPage from "../Views/Studio";
import SearchResult from "../Views/SearchResult";

const Home = React.lazy(() => import("../Views/Home"));

const AppRouter = () => {
  return (
    <React.Suspense fallback={<LoadingPage fullPage={true} />}>
      <Switch>
        <Route path="/search/:value" component={SearchResult} />
        <Route path="/anime/:id" component={AnimePage} />
        <Route path="/author/:id" component={AuthorPage} />
        <Route path="/studio/:id" component={StudioPage} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Suspense>
  );
};

export default AppRouter;
