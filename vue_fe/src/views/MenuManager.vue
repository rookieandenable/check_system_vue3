<template>
  <div class="menu-manager">
    <div class="header">
      <a-form layout="inline" :model="formState" @finish="handleFinish">
        <a-form-item label="菜单名称">
          <a-input v-model:value="formState.menuName" placeholder="请输入菜单名称" />
        </a-form-item>
        <a-form-item label="菜单状态">
          <a-select v-model:value="formState.state" style="width: 180px" @change="handleSelect">
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
    <div class="list"></div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: 'MenuManager',
  setup() {
    const formState = reactive({
      menuName: '',
      state: '0'
    })

    const handleFinish = () => {}

    const handleSelect = (value) => {
      formState.state = value
    }

    const queryBtn = () => {}

    const resetBtn = () => {
      formState.menuName = ''
      formState.state = '0'
    }

    return {
      formState,
      handleFinish,
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