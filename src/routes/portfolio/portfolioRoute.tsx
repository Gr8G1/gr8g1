import { RouteObject } from 'react-router-dom';
import { ROUTE_PATH } from '../route.paths';

import PortfolioLayout from '@/components/layouts/PortfolioLayout';
import PortfolioPage from '@/pages/portfolio/PortfolioPage';

const portfolioRoute: RouteObject[] = [
  {
    path: ROUTE_PATH.PORTFOLIO,
    element: <PortfolioLayout><PortfolioPage /></PortfolioLayout>,
  }
];

export default portfolioRoute;
