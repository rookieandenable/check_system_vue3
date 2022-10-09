<template>
  <div class="menu-manager">
    <div class="header">
      <a-form layout="inline" :model="formState">
        <a-form-item label="角色名称">
          <a-input
            v-model:value="formState.roleName"
            placeholder="请输入角色名称"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            :style="{ marginRight: '10px' }"
            @click="queryBtn"
            >查询</a-button
          >
        </a-form-item>
      </a-form>
    </div>
    <div class="list">
      <a-table
        :columns="columns"
        :data-source="listData"
        :rowKey="(record) => record._id"
      />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
  toRaw,
} from "vue";
import dayjs from "dayjs";

let menuNameMapping = {};
const columns = [
  {
    title: "角色名称",
    dataIndex: "roleName",
  },
  {
    title: "备注",
    dataIndex: "remark",
  },
  {
    title: "权限列表",
    dataIndex: "permissionList",
    customRender: ({ text }) => {
      const resultArr = [];
      text.halfCheckedKeys.forEach((item) => {
        if (menuNameMapping[item]) {
          resultArr.push(menuNameMapping[item]);
        }
      });
      return resultArr.join(",");
    },
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    customRender: ({ text }) => {
      return dayjs(text).format("YYYY-MM-DD HH:mm:hh");
    },
  },
];

export default defineComponent({
  name: "DeptManager",
  setup() {
    const { proxy } = getCurrentInstance();
    const listData = ref([]);
    const formState = reactive({
      roleName: "",
    });

    const getListData = async () => {
      const params = {};
      const queryData = toRaw(formState);
      if (queryData.roleName) params.roleName = queryData.roleName;
      const list = await proxy.$api.getRoleList(params);
      listData.value = list.list;
    };

    onMounted(() => {
      getMenuList();
      getListData();
    });

    const queryBtn = () => {
      getListData();
    };

    // 权限列表id映射对应菜单名称处理
    const permissionMapping = (list) => {
      let result = {};
      for (let i = 0; i < list.length; i++) {
        if (list[i].children && list[i].btnList) {
          // 如果btnList存在 那就证明他是最后一个层级的父节点了
          result[list[i]._id] = list[i].menuName;
        } else if (list[i].children && !list[i].btnList) {
          result = { ...result, ...permissionMapping(list[i].children) };
        }
      }
      return result;
    };

    // 获取菜单列表数据
    const getMenuList = async () => {
      const res = await proxy.$api.getMenuList({});
      menuNameMapping = permissionMapping(res);
    };

    return {
      formState,
      listData,
      columns,
      queryBtn,
    };
  },
});
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
