import { useState, useEffect } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

import SubTitle from '@/components/common/title/SubTitle';

import { _getProjects } from '@/api/portfolio';
import './Projects.scoped.scss';

/**
 * * 공용: 새창
 *
 * @param {String} path : URL
 * @param {String} target : window target
 * @param {String} features : window options...
 *
 */
const openWindow = (path: string, target: string, features?: string): void => {
  window.open(path, target, !!features ? features : '');
};

function Projects() {
  const [projectList, setProjectList] = useState<Array<{ [key: string]: any }>>([]);

  useEffect(() => {
    (async () => {
      try {
        const { projects } = await _getProjects();

        await setProjectList(projects);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='projects'>
      <SubTitle title='Projects' pointColor='orange' />
      <ul className='projectList'>
        {
          projectList.map(p => {
            return (
              <li key={p.name}>
                <p className='info'>
                  <strong className='name'>{`${p.name}`}</strong>
                  <button type='button' className='goProject' onClick={() => openWindow(p.url, '_blank')}>
                    <span>View</span>
                    <AiOutlineRight />
                  </button>
                </p>
                <p className='detail'>
                  <span className='description'>Desc. {p.description}</span>
                  <span className='language'>Lang. {p.language.join(' / ')}</span>
                </p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Projects;
