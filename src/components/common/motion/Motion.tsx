import { motion } from 'framer-motion';

import CustomScroll from '@/components/common/custom-scroll/CustomScroll';
import PageTitle from '@/components/common/title/PageTitle';
import './Motion.scss';

interface Props extends ReactProps {
  title: string;
}

function Motion({ title, children }: Props) {
  return (
    <motion.div className={`motionBox ${title.toLowerCase()}`}
      initial={{ opacity: 0, y: '50%' }}
      animate={{ opacity: 1, y: '48px' }}
      exit={{ opacity: 0, y: '50%' }}
      transition={{
        duration: .6,
        times: [0, 0.2, 1],
        ease: [.72, .13, .50, 0.72]
      }}
    >
      <PageTitle title={`<${title} />`} />
      <CustomScroll height="calc(100% - 118px)">
        {children}
      </CustomScroll>
    </motion.div>
  );
}

export default Motion;
