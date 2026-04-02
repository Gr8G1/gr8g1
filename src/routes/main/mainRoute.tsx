import { Navigate, RouteObject } from 'react-router-dom';
import { ROUTE_PATH } from '../route.paths';

const mainRoute: RouteObject[] = [
  {
    path: ROUTE_PATH.MAIN,
    element: <Navigate to={ROUTE_PATH.PORTFOLIO} replace />,
  }
];

export default mainRoute;
