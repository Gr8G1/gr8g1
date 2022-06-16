import { useRoutes } from 'react-router-dom';
import routes from '@/routes';
import './App.scoped.scss';

function App() {
  let RWS = useRoutes(routes);
  return <>{ RWS }</>;
}

export default App;
