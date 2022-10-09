<template>
  <div class="user-manager">
    <div class="header">
      <el-form :inline="true" :model="formState">
        <el-form-item label="用户ID">
          <el-input v-model="formState.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="formState.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="用户状态">
          <el-select v-model="formState.state" placeholder="请输入用户状态">
            <el-option label="所有" value="0" />
            <el-option label="在职" value="1" />
            <el-option label="离职" value="2" />
            <el-option label="试用期" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :style="{ marginRight: '10px' }" @click="queryBtn">查询</el-button>
          <el-button @click="resetBtn">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list">
      <div class="btn-del-add">
        <el-button type="danger" :disabled="!selectOptions.length" @click="allDelete">全部删除</el-button>
        <el-button type="primary">新增</el-button>
      </div>
      <el-table
        :data="listData"
        style="width: 100%"
        @selection-change="handleSelectSingle"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column property="userId" label="用户ID" show-overflow-tooltip />
        <el-table-column property="userName" label="用户名" show-overflow-tooltip />
        <el-table-column property="userEmail" label="用户邮箱" show-overflow-tooltip />
        <el-table-column property="role" label="用户角色" show-overflow-tooltip />
        <el-table-column property="state" label="用户状态" show-overflow-tooltip />
        <el-table-column label="注册时间" show-overflow-tooltip>
          <template #default="scope">{{ scope.row.createTime }}</template>
        </el-table-column>
        <el-table-column label="最后登录时间" show-overflow-tooltip>
          <template #default="scope">{{ scope.row.lastLoginTime }}</template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip width="160">
          <template #default="scope">
            <el-button type="primary" round @click="openDialog(scope.row)">编辑</el-button>
            <el-popconfirm title="是否删除?" confirm-button-text="是" cancel-button-text="否" @confirm="deleteRow(scope.row)">
              <template #reference>
                <el-button type="danger" round>删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <!-- 编辑弹窗 -->
  <el-dialog v-model="dialogEdit" title="编辑">
    <el-form :model="editForm">
      <el-form-item label="用户ID">
          <el-input v-model="editForm.userId" disabled />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="editForm.userName" />
        </el-form-item>
        <el-form-item label="用户邮箱">
          <el-input v-model="editForm.userEmail" />
        </el-form-item>
        <el-form-item label="用户角色">
          <el-select v-model="editForm.state" >
            <el-option label="管理员" value="0" />
            <el-option label="普通员工" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="用户状态">
          <el-select v-model="editForm.state">
            <el-option label="所有" value="0" />
            <el-option label="在职" value="1" />
            <el-option label="离职" value="2" />
            <el-option label="试用期" value="3" />
          </el-select>
        </el-form-item>
    </el-form>
    <template #footer>
      <span>
        <el-button @click="dialogEdit = false">取消</el-button>
        <el-button type="primary" @click="dialogEdit = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  reactive,
  ref,
  onMounted,
  toRaw,
isRef,
} from "vue";
import dayjs from "dayjs";
import api from "../api";
import to from "await-to-js";

const state = {
  1: "在职",
  2: "离职",
  3: "试用期",
};
const professional = {
  "在职": '1',
  "离职": '2',
  "试用期": '3',
}
const role = {
  0: "系统管理员",
  1: "普通员工",
};
const isRole = {
  '系统管理员': '0',
  '普通员工': '1'
}
const loading = ref(false);
const formState = reactive({
  userId: "",
  userName: "",
  state: "0",
});
const dialogEdit = ref(false)
const listData = ref([]);
let editForm = ref({})
let selectOptions = ref([])

const handleSelectSingle = (arr) => {
  for (const key of arr.keys()) {
    arr[key] = toRaw(arr[key])
  }
  selectOptions.value = arr
  console.log('---:', arr)
}
const query = async () => {
  loading.value = true;
  const params = {};
  const queryData = toRaw(formState);
  if (queryData.userId) params.userId = queryData.userId;
  if (queryData.userName) params.userName = queryData.userName;
  if (queryData.state) params.state = queryData.state;
  const [err, res] = await to(api.getUserList(params))
  if (err || res?.data?.success === 1) {
    ElMessage(`${err?.message || res?.data?.msg}`)
    return
  }
  for (const item of res?.data?.data?.list) {
    item.createTime = dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss");
    item.lastLoginTime = dayjs(item.lastLoginTime).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    item.state = state[item.state];
    item.role = role[item.role];
  }
  listData.value = res?.data?.data?.list;
  loading.value = false;
};
const queryBtn = () => {
  query();
};
const openDialog = (row) => {
  dialogEdit.value = true
  const raw = toRaw(row)
  raw.state = professional[row.state]
  raw.role = isRole[row.role]
  editForm.value = raw
}
const deleteRow = (row) => {
  editForm.value = {}
  // console.log(toRaw(row).userId)
}
const allDelete = () => {
  ElMessageBox.confirm('是否确定删除?')
    .then(() => {
      console.log('ok delete')
    })
    .catch(() => {
      // catch error
    })
}

onMounted(() => {
  query();
});

const resetBtn = () => {
  formState.userID = "";
  formState.userName = "";
  formState.state = "0";
};
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
    .btn-del-add {
      padding: 16px 0 0 10px;
    }
  }
}
</style>
