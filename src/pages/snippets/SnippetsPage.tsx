
import { useState, useEffect } from 'react';
import Motion from '@/components/common/motion/Motion';
import './Snippets.scss';

function SnippetsPage() {
  return (
    <Motion title="Snippets">
      <div className='inner'>
        Snippets
      </div>
    </Motion>
  );
}

export default SnippetsPage;
