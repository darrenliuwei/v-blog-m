<template>
  <div class="app">
    <Header />

    <div class="main">
      <div class="intro">
        热衷于前端技术，逻辑性强，个性乐观开朗，认真负责，乐于协作，有较强的自主编程能力及团队合作、团队交流能力，能很好的配合整个团队完成开发任务。
      </div>
      <div class="info">
        <p>联系方式：</p>
        <ul>
          <li>邮箱：admin@liuwei01.com</li>
          <li>微信：liuwei531946543</li>
        </ul>
      </div>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        部分技能列表
      </van-divider>
      <div class="skills">
        <van-progress :percentage="90" color="#f58220" pivot-text="Vue" />
        <van-progress :percentage="90" color="#7fb80e" pivot-text="Vuex" />
        <van-progress :percentage="80" color="#ca8687" pivot-text="uniapp" />
        <van-progress :percentage="70" color="#4e72b8" pivot-text="Nuxt" />
        <van-progress :percentage="70" color="#77ac98" pivot-text="Egg.js" />
        <van-progress :percentage="45" color="#8552a1" pivot-text="MySQL" />
        <van-progress :percentage="55" color="#ef4136" pivot-text="Linux" />
        <van-progress :percentage="40" color="#00ae9d" pivot-text="Nginx" />
        <van-progress :percentage="80" color="#cd9a5b" pivot-text="ElementUI" />
        <van-progress :percentage="45" color="#ea66a6" pivot-text="Git" />
        <van-progress :percentage="40" color="#00ae9d" pivot-text="React" />
        <van-progress :percentage="55" color="#ef4136" pivot-text="微信小程序" />
        <van-progress :percentage="80" color="#cd9a5b" pivot-text="VantUI" />
        <van-progress :percentage="50" color="#228fbd" pivot-text="TypeScript" />
      </div>
    </div>

    <Tab-bar />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    TabBar,
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.main {
  margin-top: vw(25);
  padding: vw(20);
  background-color: #fff;

  .info {
    margin: vw(40) 0;

    ul {
      margin-left: vw(100);
    }
  }

  .skills {
    .van-progress {
      margin: vw(50) 0;
    }
  }
}
</style>
