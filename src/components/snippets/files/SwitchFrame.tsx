import Temp from './temp/Temp';

const code = `*** SwitchFrame ***

import SwitchFrame from '{path}';
Vue.component('SwitchFrame', SwitchFrame);

<template>
    <SwitchFrame condition="{case}">
        <template #case1>
            <div>...</div>
        </template>
        <template #case2>
            <div>...</div>
        </template>
        <template #default>
            <div>...</div>
        </template>
    </SwitchFrame>
</template>

<script>
export default {
    functional: true,
    props: {
        condition: {
            type: [String, Number],
            required: true
        }
    },
    render(h, { data, props, scopedSlots }) {
        const { condition } = props;
        const slotFn = condition in scopedSlots ? scopedSlots[condition] : scopedSlots.default;

        return slotFn ? slotFn(data.attrs) : null;
    }
}
</script>
`;

export default () => <Temp code={code} />;
