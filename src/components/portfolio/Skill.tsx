import SubTitle from '@/components/common/title/SubTitle';

import './Skill.scoped.scss';

function Skill() {
  const skillList: { name: string, exp: number }[] = [
    {
      name: 'HTML',
      exp: 85
    },
    {
      name: 'CSS',
      exp: 80
    },
    {
      name: 'Javascript',
      exp: 85
    },
    {
      name: 'React',
      exp: 70
    },
    {
      name: 'Next',
      exp: 30
    },
    {
      name: 'Vue',
      exp: 75
    },
    {
      name: 'Nuxt',
      exp: 35
    },
    {
      name: 'Typescript',
      exp: 60
    },
    {
      name: 'Nodejs',
      exp: 45
    },
    {
      name: 'Pug',
      exp: 65
    },
    {
      name: 'Gulp',
      exp: 65
    }
  ];

  return (
    <div className='skill'>
      <SubTitle title="Skill" pointColor='red' />
      <ul className='skillList'>
        {
          skillList.map(s => {
            return (
              <li key={s.name}>
                <p className='title'>
                  <strong>{s.name}</strong>
                  <span style={{ width: `${s.exp}%` }}><i>{s.exp}%</i></span>
                </p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Skill;
