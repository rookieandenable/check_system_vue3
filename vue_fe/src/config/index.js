/*
 * @Author: sunjinhua
 * @Date: 2022-07-27 10:53:08
 * @Descript 环境配置
 */
const env = 'dev'

const base = {
  dev: {
    baseUrl: 'https://www.fastmock.site/mock/a9750f8bc8cee98c397cb20cea270a7f/api'
  },
  prop: {
    baseUrl: 'https://www.fastmock.site/mock/a9750f8bc8cee98c397cb20cea270a7f/api'
  },
  test: {
    baseUrl: 'https://www.fastmock.site/mock/a9750f8bc8cee98c397cb20cea270a7f/api'
  }
}

export default {
  ...base[env]
}