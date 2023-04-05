import { useState, useEffect } from 'react';
import SubTitle from '@/components/common/title/SubTitle';

import { _getSkill } from '@/api/portfolio';
import './Skill.scoped.scss';

function Skill() {
  const [skillList, setSkillList] = useState<Array<{ [key: string]: any }>>([]);

  useEffect(() => {
    (async () => {
      try {
        const { skill } = await _getSkill();

        await setSkillList(skill);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='skill'>
      <SubTitle title="Skill" pointColor='red' />
      <ul className='skillList'>
        {
          skillList.map((s, i) => {
            return (
              <li key={Object.keys(s)[0]}>
                <p className='title'>
                  <strong>{Object.keys(s)[0]} <i></i></strong>
                </p>
                {
                  s[Object.keys(s)[0]].map((v, i) => {
                    return (
                      <span key={v.name}>{v.name}{i < s[Object.keys(s)[0]].length - 1 ? ', ' : ''}</span>
                    );
                  })
                }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Skill;
