import { useState, useEffect } from 'react';
import SubTitle from '@/components/common/title/SubTitle';

import { _getCareer } from '@/api/portfolio';
import './Career.scoped.scss';

function Career() {
  const [careerList, setCareerList] = useState<Array<{ [key: string]: any }>>([]);

  useEffect(() => {
    (async () => {
      try {
        const { career } = await _getCareer();

        await setCareerList(career);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='career'>
      <SubTitle title="Career" />
      <ul className='careerList'>
        {
          careerList.map(c => {
            return (
              <li key={c.company}>
                <p className='info'>
                  <strong className='company'>{c.company}</strong>
                  <span className='team'>Team. {c.team} - {c.position}</span>
                </p>
                <span className='date'>{c.date[0]} ~ {c.date[1]}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Career;
