<template>
  <div>
    <div class="outBox">
      <div class="top">
        <div class="leftBox">
          <div class="leftTop">啊啊啊</div>
          <div class="leftBottom"></div>
        </div>
        <div class="rightBox"></div>
      </div>

      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="资源动态" name="first">
            <img src="../../../assets/center1.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="商品服务" name="second">
            <img src="../../../assets/center1.png" alt="">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style scoped>
.outBox {
  width: 3789px;
  height: 1216.29px;
  background-color: #f5f7f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.top {
  width: 1200px;
  height: 425.32px;
  display: flex;
  justify-content: space-between;
}
.leftBox {
  width: 334px;
  height: 425.32px;
  background-color: pink;
}
.leftTop {
  box-sizing: border-box;
  padding-top: 22px;
  padding-bottom: 19px;
  background: #fff;
  width: 334px;
  height: 298.328px;
  border-radius: 4px;
}
.leftBottom {
  width: 334px;
  height: 76px;
  background: #fff;
  padding-top: 16px;
  margin-top: 10px;
}
.rightBox {
  flex: 1;
  width: 849.996px;
  height: 421.992px;
  margin-left: 16px;
  background-image: url("https://rs.dance365.com/default_head@3x.png?imageView2/0/w/1200/h/1200/format/webp/ignore-error/1");
  background-size: cover;
  background-repeat: no-repeat;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
