import Temp from './temp/Temp';

const code = `*** ApiFrame ***
import ApiFrame from '{API_FRAME_PATH}';
Vue.component('ApiFrame', ApiFrame);

<tempalte>
    <ApiFrame
        #default="{
            data, // Promise response
            status: {
                fetching, // Promise pendding
                resolved // Promise resolve
                error, // Promise reject
            }
        }"
        :promise="_Promise" // Promise Call (Require)
    >
        (<div> ... codes </div> || <Component> ... codes </Component>)
    </ApiFrame>
</tempalte>

// * ApiFrame.vue
<script>
export default {
    name: 'ApiFrame',
    props: {
        promise: {
            default: null,
            type: [Promise, Function],
            require: true
        }
    },
    data() {
        return {
            data: null,
            status: {
                error: null,
                fetching: false,
                resolved: null
            }
        };
    },
    watch: {
        promise: {
            deep: true,
            immediate: true,
            async handler() {
                if (!this.promise && this.promise instanceof Promise) return;

                try {
                    this._setStatus({ fetching: true });
                    this.data = await this.promise;
                    this._setStatus({ data: this.data, resolved: true });
                } catch (error) {
                    this._setStatus({ data: this.data, error, resolved: false });
                }
            }
        }
    },
    methods: {
        _setStatus({ data = this.data, fetching = false, resolved = null, error = null }) {
            this.data = data;
            this.status = {
                fetching,
                resolved
                error,
            };
        }
    },
    render() {
        return this.$scopedSlots.default({
            data: this.data,
            status: this.status
        });
    }
};
</script>
`;

export default () => <Temp code={code} />;
