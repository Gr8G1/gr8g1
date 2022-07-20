import Gen from '@/components/common/syntax/Gen';

const code = `*** EnvFrame ***

<template>
    <EnvFrame
        #default="{
            isEnv // 변수 확인
        }"
        limit="local" // 노출 범위
        onlyView="prod" // 노출 고정
    >
        ...
    </EnvFrame>
</template>

<script>
export default {
    name: 'EnvFrame',
    props: {
        limit: {
            type: String,
            default: 'local'
        },
        onlyView: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            envList: ['local', 'dev', 'stg', 'prod'],
            isIncEnv: null
        };
    },
    created() {
        this._initEnv();
    },
    methods: {
        _initEnv() {
            const envIdx = this.envList.indexOf(this.limit);
            const envAcce = this.onlyView !== null
                ? [this.onlyView]
                : this.envList.filter((v, i) => i <= envIdx);

            this.isIncEnv = envAcce.indexOf(process.env.VUE_APP_ENV_MODE) !== -1;
        }
    },
    render() {
        return this.isIncEnv ? this.$scopedSlots.default({ isEnv: process.env.VUE_APP_ENV_MODE }) : null;
    }
};
</script>
`;

export default () => (<Gen code={code} />);
