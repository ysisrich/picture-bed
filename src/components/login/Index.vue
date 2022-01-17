<template>
  <n-card title="" class="login">
    <n-tabs default-value="signin1" size="large" justify-content="space-evenly">
      <n-tab-pane name="signin" tab="OAuth Token">
        <n-form>
          <n-form-item-row label="OAuth Token">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block>{{$t('login.sign_in')}}</n-button>
      </n-tab-pane>
      <n-tab-pane name="signin2" tab="GitHub Apps">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block>{{$t('login.sign_in')}}</n-button>
      </n-tab-pane>
      <n-tab-pane name="signin3" tab="用户名/密码">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block>{{$t('login.sign_in')}}</n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 60%;
  margin-top: -50px;
}
</style>