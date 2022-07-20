import Motion from '@/components/common/motion/Motion';
import Snippets from '@/components/snippets/Snippets';

import './SnippetsPage.scss';

function SnippetsPage() {
  return (
    <Motion title="Snippets">
      <div className='inner'>
        <Snippets />
      </div>
    </Motion>
  );
}

export default SnippetsPage;
