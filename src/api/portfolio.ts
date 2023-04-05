export const _getCareer = async () => {
  return await window['_request'].get('/static/portfolio/career.json');
};

export const _getActivity = async () => {
  return await window['_request'].get('/static/portfolio/activity.json');
};

export const _getSkill = async () => {
  return await window['_request'].get('/static/portfolio/skill.json');
};

export const _getProjects = async () => {
  return await window['_request'].get('/static/portfolio/projects.json');
};
