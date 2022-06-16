import { RouteObject } from 'react-router-dom';
import { TEMPLATE_PATH } from '../route.paths';

import Default from '@/components/layouts/Default';
import TemplatePage from '@/pages/template/TemplatePage';

const templateRoute: RouteObject[] = [
  {
    path: TEMPLATE_PATH,
    element: <Default />,
    children: [
      {
        index: true,
        element: <TemplatePage />
      }
    ]
  }
];

export default templateRoute;
