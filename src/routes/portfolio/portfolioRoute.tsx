import { RouteObject } from 'react-router-dom';
import { ROUTE_PATH } from '../route.paths';

import Default from '@/components/layouts/Default';
import PortfolioPage from '@/pages/portfolio/PortfolioPage';

const portfolioRoute: RouteObject[] = [
  {
    path: ROUTE_PATH.PORTFOLIO,
    element: <Default />,
    children: [
      {
        index: true,
        element: <PortfolioPage />
      }
    ]
  }
];

export default portfolioRoute;
