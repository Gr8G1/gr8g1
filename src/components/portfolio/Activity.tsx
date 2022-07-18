import { useState, useEffect } from 'react';
import SubTitle from '@/components/common/title/SubTitle';

import { _getActivity } from '@/api/portfolio';
import './Activity.scoped.scss';

function Activity() {
  const [activityList, setActivityList] = useState<Array<{ [key: string]: any }>>([]);

  useEffect(() => {
    (async () => {
      try {
        const { activity } = await _getActivity();

        await setActivityList(activity);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='activity'>
      <SubTitle title='Activity' pointColor='blue' />
      <ul className='activityList'>
        {
          activityList.map(acti => {
            return (
              <li key={acti.name}>
                <p className='info'>
                  <strong className='name'>{acti.name}</strong>
                  <span className='provider'>{acti.provider}</span>
                </p>
                <span className='date'>{acti.date[0]} ~ {acti.date[1]}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Activity;
