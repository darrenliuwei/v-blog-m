<template>
  <div>
    <van-tabbar route v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="down" url="https://sphard.com">旧站</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/about">关于</van-tabbar-item>
    </van-tabbar>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.space {
  height: vw(125);
}
</style>
