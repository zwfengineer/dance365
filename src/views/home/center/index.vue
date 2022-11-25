<template>
  <div>
    <div class="outBox">
      <div class="top">
        <div class="leftBox">
          <div class="leftTop">
            <div>
              <a href="#icon-details_share">
                <svg
                  t="1669340866169"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2691"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512 939.804444c-57.612929 0-113.570909-11.274343-166.322424-33.616161-50.889697-21.514343-96.504242-52.337778-135.809293-91.539394C170.666667 775.447273 139.843232 729.729293 118.328889 678.839596 96.193939 626.191515 84.816162 570.233535 84.816162 512.620606s11.274343-113.570909 33.616161-166.322424c21.514343-50.889697 52.337778-96.504242 91.539394-135.809293 39.201616-39.201616 84.919596-70.025051 135.809293-91.539394 52.648081-22.238384 108.606061-33.616162 166.322424-33.616162h1.034344l-0.103435 57.923233h-0.930909c-98.676364 0-191.353535 38.374141-261.068282 108.192323-69.818182 69.818182-108.295758 162.495354-108.295758 261.171717s38.374141 191.353535 108.192323 261.068283c69.714747 69.818182 162.495354 108.192323 261.068283 108.192323 98.572929 0 191.250101-38.374141 261.068283-108.088889C842.78303 704.077576 881.260606 611.400404 881.260606 512.827475h57.923232c0 57.612929-11.377778 113.570909-33.616161 166.21899-21.514343 50.889697-52.337778 96.504242-91.539394 135.705858s-84.919596 69.921616-135.705859 91.43596c-52.751515 22.341818-108.606061 33.616162-166.322424 33.616161zM938.149495 352.711111h-57.923232V145.73899H672.530101v-57.923232H938.149495V352.711111z m0 0"
                    p-id="2692"
                  ></path>
                  <path
                    d="M888.371717 96.012929l40.96 40.96L560.484848 505.806869l-40.96-40.96L888.371717 96.012929z m0 0"
                    p-id="2693"
                  ></path></svg
              ></a>
              分享
            </div>
          </div>
          <div class="leftBottom"></div>
        </div>
        <div class="rightBox"></div>
      </div>

      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="资源动态" name="first">
          <img src="../../../assets/center1.png" alt="" />
        </el-tab-pane>
        <el-tab-pane label="商品服务" name="second">
          <img src="../../../assets/center1.png" alt="" />
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
