<template>
  <div class="menu-manager">
    <div class="header">
      <a-form layout="inline" :model="formState">
        <a-form-item label="菜单名称">
          <a-input v-model:value="formState.menuName" placeholder="请输入菜单名称" />
        </a-form-item>
        <a-form-item label="菜单状态">
          <a-select v-model:value="formState.menuState" style="width: 180px" @change="handleSelect">
            <a-select-option value="0">正常</a-select-option>
            <a-select-option value="1">停用</a-select-option>
          </a-select>
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

const columns = [
  {
    title: "菜单名称",
    dataIndex: "menuName",
  },
  {
    title: "图标",
    dataIndex: "icon",
  },
  {
    title: "菜单类型",
    dataIndex: "menuType",
    customRender: ({text}) => {
      return {
        '1': '菜单',
        '2': '按钮'
      }[text]
    },
  },
  {
    title: "权限标识",
    dataIndex: "menuCode",
  },
  {
    title: "路由地址",
    dataIndex: "path",
  },
  {
    title: "组件路径",
    dataIndex: "component",
  },
  {
    title: "菜单状态",
    dataIndex: "menuState",
    customRender: ({text}) => {
      return {
        '1': '正常',
        '2': '停止'
      }[text]
    },
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
];

export default defineComponent({
  name: 'MenuManager',
  setup() {
    const { proxy } = getCurrentInstance()
    const listData = ref([])
    const formState = reactive({
      menuName: '',
      menuState: '0'
    })

    const getListData = async () => {
      const params = {}
      const queryData = toRaw(formState)
      if(queryData.menuName) params.menuName = queryData.menuName
      if(queryData.menuState) params.menuState = Number(queryData.menuState)
      const list = await proxy.$api.getMenuList(params)
      listData.value = list
    }

    onMounted(() => {
      getListData()
    })

    const handleSelect = (value) => {
      formState.menuState = value
    }

    const queryBtn = () => {
      getListData()
    }

    const resetBtn = () => {
      formState.menuName = ''
      formState.menuState = '0'
    }

    return {
      formState,
      listData,
      columns,
      handleSelect,
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