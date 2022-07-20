import { useEffect, useState } from 'react';

import items from './items';

import './Snippets.scss';

function flatten(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}

function Snippets() {
  const [tags, setTags] = useState<string[]>([]);
  const [filterTag, setFilterTag] = useState<string[]>([]);
  const [snippets, setSnippets] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const tags: string[] = flatten(Object.keys(items).map(key => items[key].tags));

    setTags([...new Set(tags)]);
  }, []);

  useEffect(() => {
    if (filterTag.length === 0) {
      setSnippets(items);
    } else {
      let filteredSnippet = {};

      filterTag.forEach(tag => {
        filteredSnippet = {
          ...filteredSnippet,
          ...Object.keys(items)
            .filter(k => items[k].tags.indexOf(tag) !== -1)
            .reduce((k, t) => ({ ...k, [t]: items[t] }), {})
        };
      });

      setSnippets(filteredSnippet);
    }
  }, [filterTag]);

  function onFilterTag(tag: string): void {
    setFilterTag(t => {
      const isExistTag = filterTag.indexOf(tag);

      if (isExistTag === -1) t.push(tag);
      else t.splice(isExistTag, 1);

      return [...t];
    });
  }

  function onTooggleSnippetContent(key: string): void {
    setSnippets(s => ({
      ...s,
      [key]: {
        ...s[key],
        isActiveContent: !s[key].isActiveContent
      }
    }));
  }

  return (
    <div className='snippets'>
      <div className='tags'>
        {tags.map(tag => (<button type='button' className={`tag ${filterTag.indexOf(tag) !== -1 ? 'active' : ''}`} key={'#' + tag} onClick={() => onFilterTag(tag)}>#{tag}</button>))}
      </div>
      <ul>
        {
          Object.keys(snippets).map(key => {
            const S = snippets[key];
            const C = S.component;

            return (S &&
              <li key={key}>
                <div className='info' onClick={() => onTooggleSnippetContent(key)}>
                  <strong className='title'>{key}</strong>
                  <p className='tag'>{S.tags.map(t => ('#' + t)).join(' ')}</p>
                  <span className='date'>{S.date}</span>
                </div>
                {
                  S.isActiveContent && (
                    <div className='content'>
                      <C />
                    </div>
                  )
                }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Snippets;
