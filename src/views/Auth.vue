<style scoped>
@import '~vux/dist/vux.css';
.hide {
    display: none;
}
</style>

<template>
    <div class='auth'>
        <group :class="{ 'hide':is_sign_up }">
            <x-input :value="form_sign_in.username" :readonly="flag" title="用户名"></x-input>
            <x-input :value="form_sign_in.name" :readonly="flag" title="姓名"></x-input>
            <x-input :value="form_sign_in.phone" :readonly="flag" title="手机号码"></x-input>
            <x-input :value="form_sign_in.id_num" :readonly="flag" title="身份证号码"></x-input>
            <a class="sign_box weui_tabbar_item" v-link="{ name: 'sign' }">
                <x-button @click="Modify" class='sign_up_bt' type="primary">更改</x-button>
            </a>
        </group>
        <toast :show.sync="show" :time='st'>验证成功</toast>
        <toast :show.sync="show" type="warn" :time='st'>身份信息不符</toast>
        <loading :show="show" :text="text1" :time='st'></loading>
    </div>
</template>

<script>
    import Group from 'vux-components/group'
    import Toast from 'vux-components/toast'
    import Switch from 'vux-components/switch'
    import XInput from 'vux-components/x-input'
    import Loading from 'vux-components/loading'
    import XButton from 'vux-components/x-button'
    import Headbar from '../components/headbar.vue'
    module.exports = {
        data:function(){
            return {
                is_sign_up: false,
                is_sign_in: true,
                show: false,
                flag: true,
                text1: '验证身份信息...',
                st: 5000
            }
        },
        vuex: {
            getters: { 
                is_res: function (state) {
                    return state.is_res
                },
                form_sign_in: function (state) {
                    return state.form_sign_in
                }, 
            }
        },
        components:{
            Group,
            Switch,
            XInput,
            XButton,
            Loading,
            Toast,
            Headbar
        },
        methods:{
            Modify(){
                this.show = true
                this.flag = false
            }
        }
    }
</script>