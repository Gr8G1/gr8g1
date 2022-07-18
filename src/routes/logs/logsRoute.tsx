import { RouteObject } from 'react-router-dom';
import { ROUTE_PATH } from '../route.paths';

import Default from '@/components/layouts/Default';
import LogsPage from '@/pages/logs/LogsPage';

const logsRoute: RouteObject[] = [
  {
    path: ROUTE_PATH.LOGS,
    element: <Default />,
    children: [
      {
        index: true,
        element: <LogsPage />
      }
    ]
  }
];

export default logsRoute;
