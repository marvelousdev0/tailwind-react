const { lazy, Suspense } = require("react");
const { Switch, Route } = require("react-router-dom");

const Home = lazy(() => import("../pages/Home/Home"));
const MiddlewareBuilds = lazy(() =>
  import("../pages/MiddlewareBuilds/MiddlewareBuilds")
);

export const paths = {
  HOME: "/",
  MIDDLEWAREBUILDS: "/middleware",
};

export const routes = (
  <Suspense fallback={null}>
    <Switch>
      <Route path={paths.HOME} component={Home} />
      <Route path={paths.MIDDLEWAREBUILDS} component={MiddlewareBuilds} />
    </Switch>
  </Suspense>
);
