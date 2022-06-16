import templateRoute from './template/templateRoute';
import mainRoute from './main/mainRoute';
import errorRoute from './error/errorRoute';

// * https://reactrouter.com/docs/en/v6
const routes = [
  ...templateRoute,
  ...mainRoute,
  ...errorRoute
];

export default routes;
