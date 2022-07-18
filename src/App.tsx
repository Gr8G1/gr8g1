import { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import routes from '@/routes';

import './App.scss';

function App() {
  const RWS = useRoutes(routes);
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Suspense key={location.pathname} >
        {RWS}
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
