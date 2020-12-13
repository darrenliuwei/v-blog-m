<template>
  <div class="app">
    <Header />

    <div class="main">
      <ul>
        <li v-for="item in list" :key="item.id" @click="articleDetail(item)">
          <p>{{ item.title }}</p>
          <p>发表于：{{ $moment(item.create_time).format('YYYY年MM月DD日') }} | 更新于：{{ $moment(item.update_time).format('YYYY年MM月DD日') }}</p>
          <p v-html="item.intro"></p>
          <van-button size="small" plain type="info">阅读全文>></van-button>
        </li>
      </ul>
      <!-- 分页 -->
      <van-pagination v-model="currentPage" :total-items="total" @change="changePageNum" />
    </div>

    <Tab-bar />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
import Header from '@/components/Header.vue'
import { articleList } from '@/api/article.js'
import { mapMutations } from 'vuex'

export default {
  components: {
    TabBar,
    Header
  },
  data() {
    return {
      // 文章列表数据
      list: [],
      // 文章总条数
      total: 0,
      // 分页-当前页码
      currentPage: 1
    }
  },
  created() {
    this.fetchArticles(0, 1)
  },
  methods: {
    ...mapMutations(['SET_ARTICLE']),
    // 获取文章列表
    async fetchArticles(status, pageNumber) {
      const res = await articleList(status, pageNumber)
      res.data.forEach(item => {
        item.intro = this.$marked(item.intro)
      })
      this.list = res.data
      this.total = res.total
    },
    // 分页
    changePageNum(pageNum) {
      this.fetchArticles(0, pageNum)
    },
    // 跳转到文章详情页
    articleDetail(item) {
      item.content = this.$marked(item.content)
      this.SET_ARTICLE(item)
      this.$router.push('/article/' + item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.app {
  .main {
    ul {
      margin-bottom: vw(20);

      li {
        margin-top: vw(25);
        text-align: center;
        padding: vw(20);
        background-color: #fff;

        p {
          &:nth-child(1) {
            font-size: vw(35);
            color: blue;
          }
          &:nth-child(2) {
            margin: vw(12);
            font-size: vw(25);
            color: grey;
          }
          &:nth-child(3) {
            margin-bottom: vw(20);
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
