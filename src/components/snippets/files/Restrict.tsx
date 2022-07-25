import Temp from './temp/Temp';

const code = `*** Restrict ***
Vue.use(Restrict);

export default class Restrict {
  constructor(el, binding) {
      Object.assign(this, { el, binding });

      el.addEventListener('keyup', this);
      el.addEventListener('keydown', this);
      el.addEventListener('input', this);
  }

  static install(Vue) {
      Vue.directive('Restrict', this.directive);
  }

  static directive = {
      bind(el, binding) {
          el = el instanceof HTMLInputElement ? el : el.querySelector('input');

          if (el) return new Restrict(el, binding);
      }
  };

  handleEvent(event) {
      this[event.type](event, this.binding.value);
  }

  keyup({ target }, restrict) {
      const newRegExp = new RegExp(\`[^0-9\${restrict}]\`, 'g');

      target.value = target.value.replace(newRegExp, '');
  }

  keydown(event, restrict) {
      const { key, keyCode, ctrlKey, metaKey, target } = event;
      const typed = restrict.split('').some(d => d === key);
      const conditions = !(typed || key >= '0' && key <= '9' || (ctrlKey && [65, 67, 86, 88].includes(keyCode)) || (metaKey && [65, 67, 86, 88].includes(keyCode)) || ['Delete', 'Backspace', 'Tab', 'Esc', 'Escape', 'Enter', 'Home', 'End', 'PageUp', 'PageDown', 'Del', 'Delete', 'Left', 'ArrowLeft', 'Right', 'ArrowRight', 'Insert', 'Up', 'ArrowUp', 'Down', 'ArrowDown'].includes(key));

      if (conditions) event.preventDefault();
  }

  input({ target }, restrict) {
      const enExp = /[^A-Za-z]/g;
      const krExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
      const ectExp = \`/[^0-9\${restrict}]/g\`;

      let v = target.value;
      let vMax = target.maxLength;

      if (v.length >= vMax) v = v.slice(0, vMax);

      switch (restrict) {
          case ',':
              v = v.replace(/\\D/g, '');
              v = v.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
              break;
          case '.':
              v = v.replace(ectExp, '');
              if (v.match(/[.]/g)?.length > 1) v = v.replace(/\\.$/g, '');
              break;
          case '.-':
              v = v.replace(ectExp, '');

              if (v.match(/[.]/g)?.length > 1) v = v.replace(/\\.$/g, '');
              if (v.match(/[-]/g)?.length > 1) v = v.replace(/-$/g, '');
              break;
          default:
              break;
      }

      if (target.value !== v) {
          const event = document.createEvent('Event');
          event.initEvent('input', true, false, window, 0);

          target.value = v;
          target.dispatchEvent(event);
      }
  }
}
`;

export default () => <Temp code={code} />;
