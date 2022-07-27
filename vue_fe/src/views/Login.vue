<template>
  <div class="login-wrapper">
    <div class="login-modal">
      <div class="header">权限管理系统</div>
      <a-form
        :model="formState"
        name="horizontal_login"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="密码&#12288"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="btn">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, inject, ref } from "vue"
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue"
import { useRouter } from "vue-router"

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const $api = inject('$api')
    const router = useRouter()

    const formState = reactive({
      username: "",
      password: "",
    })

    const onFinish = (values) => {
      $api.login(values).then(res => {
        sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
        router.push('/welcome')
      })
    }

    const disabled = computed(() => {
      return !(formState.username && formState.password)
    })
    return {
      formState,
      onFinish,
      disabled,
    }
  },
})
</script>

<style scoped lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8fcff;
  .login-modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0 0 14px 7px #c7c9cb4d;
    .header {
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      margin-bottom: 30px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
