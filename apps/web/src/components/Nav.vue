<script setup lang="ts">
import FunctionComponent from '@/components/Function.vue'

defineOptions({
    name: 'NavComponent'
})
</script>

<template>
    <div class="nav">
        <div class="nav-bar">
            <div class="logo">
                <img src="/avatar/100x.png" alt="Logo" />
                <h1>Message Distribution System</h1>
            </div>
        </div>
        <div class="btn-group">
            <function-component />
        </div>
    </div>
</template>

<style scoped lang="less">
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 32px;

    height: 80px;
    background: #fff;
    border-bottom: 1px solid #00000026;

    .nav-bar {
        .logo {
            display: flex;
            align-items: center;

            img {
                height: 40px;
                border-radius: 100%;
            }

            h1 {
                margin: 0;
                margin-left: 10px;
                font-size: 20px;
            }
        }
    }
}
</style>
