<template>
  <div class="menu-manager">
    <div class="header">
      <a-form layout="inline" :model="formState">
        <a-form-item label="部门名称">
          <a-input v-model:value="formState.deptName" placeholder="请输入部门名称" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" :style="{ marginRight: '10px' }" @click="queryBtn">查询</a-button>
          <a-button @click="resetBtn">重置</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="list">
      <a-table
        :columns="columns"
        :data-source="listData"
        :rowKey="record=>record._id"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, toRaw } from "vue"
import dayjs from "dayjs";

const columns = [
  {
    title: "部门名称",
    dataIndex: "deptName",
  },
  {
    title: "负责人",
    dataIndex: "userName",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    customRender: ({text}) => {
      return dayjs(text).format('YYYY-MM-DD HH:mm:hh')
    },
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
    customRender: ({text}) => {
      return dayjs(text).format('YYYY-MM-DD HH:mm:hh')
    },
  },
];

export default defineComponent({
  name: 'DeptManager',
  setup() {
    const { proxy } = getCurrentInstance()
    const listData = ref([])
    const formState = reactive({
      deptName: '',
    })

    const getListData = async () => {
      const params = {}
      const queryData = toRaw(formState)
      if(queryData.deptName) params.deptName = queryData.deptName
      const list = await proxy.$api.getDeptList(params)
      listData.value = list
    }

    onMounted(() => {
      getListData()
    })

    const queryBtn = () => {
      getListData()
    }

    const resetBtn = () => {
      formState.deptName = ''
    }

    return {
      formState,
      listData,
      columns,
      queryBtn,
      resetBtn,
    }
  }
})
</script>

<style scoped lang="scss">
.menu-manager {
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