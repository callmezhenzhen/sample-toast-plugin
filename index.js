import Toast from './toast.vue'

let ToastConstructor; //Toast子类，用于构造Toast实例
let Vue;

function toast(options = {}) {
    let _toast = new ToastConstructor({
        el: document.createElement('div') //实例的根元素为创建的div元素
    })
    //添加默认项
    let opts = Object.assign({duration: 3000}, typeof options === 'string' ? {message: options} : options);
    document.body.appendChild(_toast.$el); //将实例根元素添加到页面上
    let duration = opts.duration;
    Vue.nextTick(function() {
        _toast.toast(opts);
        if (duration > 0) { //定时关闭
            setTimeout(function() {
                _toast.close();
            }, duration);
        }
    });
    _toast.$on('close', onClose) //监听close事件
    return _toast
}

function onClose() {
    // this -> toast 实例
    let node = this.$el;
    if (node && node.parentNode) { //移除toast实例根节点
        node.parentNode.removeChild(node);
    }
    this.$destroy(); //销毁实例
}

export default function install (vue) {
    Vue = vue;
    ToastConstructor = vue.extend(Toast);
    vue.prototype['$toast'] = toast;
}