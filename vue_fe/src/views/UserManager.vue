<template>
  <div class="user-manager">
    <div class="header">
      <a-form layout="inline" :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
        <a-form-item label="用户ID">
          <a-input v-model:value="formState.userID" placeholder="请输入用户ID" />
        </a-form-item>
        <a-form-item label="用户名">
          <a-input v-model:value="formState.userName" placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item label="用户状态">
          <a-select v-model:value="formState.state" style="width: 180px" @change="handleSelect">
            <a-select-option value="0">所有</a-select-option>
            <a-select-option value="1">在职</a-select-option>
            <a-select-option value="2">离职</a-select-option>
            <a-select-option value="3">试用期</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" :style="{ marginRight: '10px' }" @click="queryBtn">查询</a-button>
          <a-button @click="resetBtn">重置</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="list">
      <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, ref, unref } from 'vue'
import dayjs from 'dayjs'

const columns = [{
  title: '用户ID',
  dataIndex: 'nameID',
}, {
  title: '用户名',
  dataIndex: 'userName',
}, {
  title: '用户邮箱',
  dataIndex: 'userEmail',
}, {
  title: '用户角色',
  dataIndex: 'userRole'
}, {
  title: '用户状态',
  dataIndex: 'userState'
}, {
  title: '注册时间',
  dataIndex: 'registerTime'
}, {
  title: '最后登录时间',
  dataIndex: 'lastLoginTime'
}, {
  title: '操作',
  dataIndex: 'operate'
}]
const data = []

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    nameID: `${i+1}`,
    userName: '张荣方',
    userEmail: `jieggafa${i+10}@qq.com`,
    userRole: '管理员',
    userState: '在职',
    registerTime: dayjs().format('YYYY-MM-DD'),
    lastLoginTime: dayjs().format('YYYY-MM-DD'),
    operate: '',
  });
}

export default defineComponent({
  name: 'UserManager',
  setup() {
    const formState = reactive({
      userID: '',
      userName: '',
      state: '0'
    })

    const handleFinish = values => {
      console.log(values, formState)
    }

    const handleFinishFailed = errors => {
      console.log(errors)
    }

    const handleSelect = value => {
      formState.state = value
    }

    const queryBtn = () => { }

    const resetBtn = () => {
      formState.userID = ''
      formState.userName = ''
      formState.state = '0'
    }

    const selectedRowKeys = ref([])

    const onSelectChange = changableRowKeys => {
      console.log('selectedRowKeys changed: ', changableRowKeys)
      selectedRowKeys.value = changableRowKeys
    }

    const rowSelection = computed(() => {
      return {
        selectedRowKeys: unref(selectedRowKeys),
        onChange: onSelectChange,
        hideDefaultSelections: true
      }
    })

    return {
      formState,
      handleFinish,
      handleFinishFailed,
      handleSelect,
      resetBtn,
      queryBtn,
      data,
      columns,
      selectedRowKeys,
      rowSelection,
    }
  }
})
</script>

<style scoped lang="scss">
.user-manager {
  height: 100%;

  .header {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }

  .list {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 10px;
  }
}
</style>