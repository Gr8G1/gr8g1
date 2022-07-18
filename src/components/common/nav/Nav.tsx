import { useMatch, useNavigate, useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/route.paths';
import './Nav.scss';

function Nav() {
  const routes: object = ROUTE_PATH;
  const navigate = useNavigate();

  return (
    <div className='nav'>
      <ul className='navList'>
        {
          Object.keys(routes).map(name => {
            return (
              name !== 'TEMPLATE' &&
              <li
                key={name}
                className={`${name.toLowerCase()} ${useMatch(routes[name]) ? 'active' : ''}`}
                onClick={() => navigate(routes[name])}
              >
                <button type='button'>
                  <span>&lt;{
                    name !== 'MAIN' ? name.charAt(0) + name.slice(1).toLowerCase() : 'Gr8G1'
                  }&nbsp;/&gt;
                  </span>
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Nav;
