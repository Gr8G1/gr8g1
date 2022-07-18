import templateRoute from './template/templateRoute';
import mainRoute from './main/mainRoute';
import portfolioRoute from './portfolio/portfolioRoute';
import snippetsRoute from './snippets/snippetsRoute';
import logsRoute from './logs/logsRoute';
import errorRoute from './error/errorRoute';

// * https://reactrouter.com/docs/en/v6
const routes = [
  ...templateRoute,
  ...mainRoute,
  ...portfolioRoute,
  ...snippetsRoute,
  ...logsRoute,
  ...errorRoute
];

export default routes;
