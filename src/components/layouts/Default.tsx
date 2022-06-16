import { Outlet } from 'react-router-dom';

export default () => {
  return (
    <div id='wrap'>
      <div id="contents">
        <Outlet />
      </div>
    </div>
  );
};
