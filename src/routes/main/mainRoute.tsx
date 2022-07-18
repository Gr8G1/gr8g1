import { RouteObject } from 'react-router-dom';
import { ROUTE_PATH } from '../route.paths';

import Default from '@/components/layouts/Default';
import MainPage from '@/pages/main/MainPage';

const mainRoute: RouteObject[] = [
  {
    path: ROUTE_PATH.MAIN,
    element: <Default />,
    children: [
      {
        index: true,
        element: <MainPage />
      }
    ]
  }
];

export default mainRoute;
