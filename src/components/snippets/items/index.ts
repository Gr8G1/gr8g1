import YoutubeThumbnail from '../files/YoutubeThumbnail';
import Restrict from '../files/Restrict';
import ApiFrame from '../files/ApiFrame';
import SwitchFrame from '../files/SwitchFrame';
import EnvFrame from '../files/EnvFrame';

const items = {
  YoutubeThumbnail: {
    component: YoutubeThumbnail,
    tags: ['Javascript', 'Youtube'],
    description: '',
    date: '2022.07.22',
    isActiveContent: false
  },
  Restrict: {
    component: Restrict,
    tags: ['Vue', 'Directive'],
    description: '',
    date: '2022.07.22',
    isActiveContent: false
  },
  ApiFrame: {
    component: ApiFrame,
    tags: ['Vue', 'Component'],
    description: '',
    date: '2022.07.18',
    isActiveContent: false
  },
  SwitchFrame: {
    component: SwitchFrame,
    tags: ['Vue', 'Component'],
    description: '',
    date: '2022.07.18',
    isActiveContent: false
  },
  EnvFrame: {
    component: EnvFrame,
    tags: ['Vue', 'Component'],
    description: '',
    date: '2022.07.17',
    isActiveContent: false
  }
};

export default items;
