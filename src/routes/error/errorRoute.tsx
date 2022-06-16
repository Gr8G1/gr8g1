import { RouteObject } from 'react-router-dom';
import { ERROR_PATH } from '../route.paths';

import NoMatch from '@/components/error/NoMatch';

const errorRoute: RouteObject[] = [
  {
    path: ERROR_PATH.ALL,
    element: <NoMatch />
  }
];

export default errorRoute;
