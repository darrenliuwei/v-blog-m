<template>
  <div class="app">
    <div class="head">
      <span>刘伟博客</span>
      <span>study hard, play hard.</span>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.head {
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: vw(100);
  line-height: vw(100);
  background-color: #fff;

  span {
    &:nth-child(1) {
      margin-left: vw(50);
      font-size: vw(50);
      color: red;
    }

    &:nth-child(2) {
      margin-left: vw(20);
      color: grey;
    }
  }
}

.space {
  height: vw(100);
}
</style>
