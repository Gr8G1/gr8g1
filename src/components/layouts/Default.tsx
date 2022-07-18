import { Outlet } from 'react-router-dom';
import Nav from '@/components/common/nav/Nav';

export default () => {
  return (
    <div id='wrap'>
      <Nav />
      <div id="contents">
        <Outlet />
      </div>
    </div>
  );
};
