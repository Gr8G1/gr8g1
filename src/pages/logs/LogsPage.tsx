import Motion from '@/components/common/motion/Motion';
import Logs from '@/components/logs/Logs';

import './LogsPage.scss';

function LogsPage() {
  return (
    <Motion title="Logs">
      <div className='inner'>
        <Logs />
      </div>
    </Motion>
  );
}

export default LogsPage;
