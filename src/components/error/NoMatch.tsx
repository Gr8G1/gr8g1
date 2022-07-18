import { Link, useLocation, useMatch } from 'react-router-dom';
import './NoMatch.scss';

export default () => {
  const location = useLocation();
  const match = useMatch('*');

  return (
    <div className='noMatch'>
      <strong>요청하신 페이지가 존재하지 않습니다.</strong>
      <Link className='goMain' to='/'>메인으로 가기</Link>
      {/*
        <div>match: <br /> {JSON.stringify(match)}</div>
        <div>location : <br /> {JSON.stringify(location)}</div>
      */}
    </div>
  );
};
