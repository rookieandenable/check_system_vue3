<template>
  <div class="login-wrapper">
    <div class="login-modal">
      <div class="header">权限管理系统</div>
      <el-form
        :model="ruleForm"
        label-width="120px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model.number="ruleForm.pwd" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onFinish" class="btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router"
import to from 'await-to-js'
import api from '@/api'

const router = useRouter()
const ruleForm = reactive({
  username: "",
  pwd: "",
})

const onFinish = async() => {
  const param = {
    userName: ruleForm.username,
    userPwd: ruleForm.pwd
  }
  const [err, res] = await to(api.login(param))
  if (err || res?.data?.success === 1) {
    ElMessage(`${res?.data?.msg || err?.message}`)
    return
  }
  ElMessage.success(`${res?.data?.msg}`)
  sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
  router.push('/welcome')
}
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
