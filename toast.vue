<template>
    <div v-if="show" class="bg-layer">
        <div class="toast">{{message}}</div>
    </div>
</template>
<script>
export default {
    name: 'toast',
    data() {
        return {
            show: false,
            message: ''
        }
    },
    methods: {
        toast(options = {}) {
            if (options.text) {
                this.message = options.text;
                this.show = true;
            }
        },
        close() {
            this.show = false;
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
    .bg-layer {
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100;
    }
    .toast {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 50px;
        max-width: 200px;
        max-height: 100px;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 1);
        border-radius: 6px;
        color: #fff;
        font-size: 14px;
    }
</style>