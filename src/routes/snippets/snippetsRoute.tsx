import { RouteObject } from 'react-router-dom';
import { ROUTE_PATH } from '../route.paths';

import Default from '@/components/layouts/Default';
import SnippetsPage from '@/pages/snippets/SnippetsPage';

const snippetsRoute: RouteObject[] = [
  {
    path: ROUTE_PATH.SNIPPETS,
    element: <Default />,
    children: [
      {
        index: true,
        element: <SnippetsPage />
      }
    ]
  }
];

export default snippetsRoute;
