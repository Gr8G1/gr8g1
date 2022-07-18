import { useNavigate } from 'react-router-dom';
import { AiFillLeftCircle } from 'react-icons/ai';
import './PageTitle.scoped.scss';

interface Props extends ReactProps {
  title: string;
}

function Title({ title }: Props) {
  const navigate = useNavigate();

  return (
    <div className="pageTitle">
      <h2>{title}</h2>
      <button className='goBack' type='button' onClick={() => navigate('/')}>
        <AiFillLeftCircle />
      </button>
    </div>
  );
}

export default Title;
