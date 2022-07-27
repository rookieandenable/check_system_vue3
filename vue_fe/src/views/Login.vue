<template>
  <div class="login-wrapper">
    <div class="login-modal">
      <div class="header">权限管理系统</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label-width="auto" label="用户名" prop="username">
          <el-input
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="用户名"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item label-width="auto" label="密码&#160;&#160;&#160;" prop="pwd">
          <el-input
            v-model="ruleForm.pwd"
            type="password"
            autocomplete="off"
            placeholder="密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item label-width="auto">
          <el-button type="primary" size="large" class="btn" @click="submit(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { inject, reactive, ref } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

const $api = inject('$api')
const router = useRouter()
const ruleFormRef = ref()
const ruleForm = reactive({
  username: '',
  pwd: '',
})

const validatePwd = (rule, value, callback) => {
  if (value === '') {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
}

const validateUser = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
}

const rules = reactive({
  username: [{ validator: validateUser, trigger: "blur" }],
  pwd: [{ validator: validatePwd, trigger: "blur" }],
})

const submit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      $api.login(ruleForm).then(res => {
        sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
        router.push('/home')
      })
    } else {
      return false
    }
  });
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
