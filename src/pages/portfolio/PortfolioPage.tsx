
import Motion from '@/components/common/motion/Motion';
import About from '@/components/portfolio/About';
import Career from '@/components/portfolio/Career';
import Activity from '@/components/portfolio/Activity';
import Skill from '@/components/portfolio/Skill';
import Projects from '@/components/portfolio/Projects';

import './PortfolioPage.scss';

function PortfolioPage() {
  return (
    <Motion title='Portfolio'>
      <div className='inner'>
        <About />
        <Career />
        <Activity />
        <Skill />
        <Projects />
      </div>
    </Motion>
  );
}

export default PortfolioPage;
