<template>
  <div>
    <Header />

    <div class="main">
      <div class="content">
        <p>{{ articleDetail.title }}</p>
        <p>发表于：{{ $moment(articleDetail.create_time).format('YYYY年MM月DD日') }} | 更新于：{{ $moment(articleDetail.update_time).format('YYYY年MM月DD日') }}</p>
        <p v-html="articleDetail.content"></p>
      </div>
    </div>

    <Tab-bar />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'
import { getArticle } from '@/api/article.js'

export default {
  components: {
    TabBar,
    Header
  },
  data() {
    return {
      // 文章详情
      articleDetail: this.$store.state.article
    }
  },
  computed: {
    ...mapState(['article'])
  },
  created() {
    // 判断vuex里有没有存文章内容，如果存了，就不再发送请求了
    if (Object.keys(this.article).length === 0) {
      this.fetchArticle(this.$route.params.id)
    }
  },
  methods: {
    // 获取指定ID的文章详情
    async fetchArticle(id) {
      const res = await getArticle(id)
      this.articleDetail = res.data[0]
      this.articleDetail.content = this.$marked(this.articleDetail.content)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.main {
  margin-top: vw(25);
  padding: vw(20);
  background-color: #fff;

  .content {
    width: 100%;
    text-align: center;

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
</style>
