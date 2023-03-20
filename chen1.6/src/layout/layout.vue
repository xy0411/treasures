<template>
  <el-container class="container">
    <el-aside class="left">
      <div class="left-logo">
        <img src="https://cn.vitejs.dev/logo-with-shadow.png" alt="" />
        <!-- <h3 v-show="!isExpand">器材管理系统</h3> -->
      </div>
      <el-menu
        default-active="/"
        class="menu-vertical"
        :collapse="isExpand"
        background-color="rgb(0,21,41)"
        text-color="rgb(166,173,180)"
        :collapse-transition="true"
        router="true"
      >
        <template v-for="item in routers" :key="item.name">
          <template v-if="item.isSub">
            <el-sub-menu :index="item.path">
              <template #title>
                <el-icon :size="18">
                  <component :is="item.icon"></component>
                </el-icon>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="it in item.children" :key="it.path">
                <el-menu-item :index="`${item.path}/${it.path}`">
                  <el-icon :size="18">
                    <component :is="it.icon"></component>
                  </el-icon>
                  {{ it.title }}
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path">
              <el-icon :size="18">
                <component :is="item.icon"></component>
              </el-icon>
              <template #title>
                {{ item.title }}
              </template>
            </el-menu-item>
          </template>
        </template>
        <!-- 
          <el-menu-item index="2">
            <el-icon><i-ep-Film /></el-icon>
            <template #title>数据大屏</template>
          </el-menu-item>
           -->
      </el-menu>
    </el-aside>
    <el-container class="right">
      <el-header class="right-header" height="55px">
        <div class="right-header-collapse">
          <el-icon v-if="isExpand" @click="changeExpand"
            ><i-ep-Expand
          /></el-icon>
          <el-icon v-else @click="changeExpand"><i-ep-Fold /></el-icon>
        </div>
        <div class="right-header-avatar">
          <el-icon class="right-gap pointer" @click="enlargeOrshrink"
            ><FullScreen
          /></el-icon>
          <span class="right-gap">billie</span>
          <el-popconfirm
            confirm-button-text="Yes"
            cancel-button-text="No"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="confirmEvent"
            @cancel="cancelEvent"
          >
            <template #reference>
              <el-avatar src="src/assets/images/billie.png" />
            </template>
          </el-popconfirm>
        </div>
      </el-header>
      <el-main class="right-main">
        <router-view class="view"></router-view>
      </el-main>
      <el-footer class="right-footer" height="30px"
        >2023 Created by lql.</el-footer
      >
    </el-container>
  </el-container>
</template>

<script>
import router from "@/router/index";
import screenfull from "screenfull";
export default {
  data() {
    return {
      isExpand: false,
      routers: router.options.routes,
    };
  },
  methods: {
    changeExpand() {
      this.isExpand = !this.isExpand;
    },
    listeningWindow() {
      window.onresize = () => {
        return (() => {
          let screenWidth = document.body.clientWidth;
          if (screenWidth < 1200) this.isExpand = true;
          if (screenWidth > 1200) this.isExpand = false;
        })();
      };
    },
    enlargeOrshrink() {
      screenfull.toggle();
    },
  },
  mounted() {
    this.listeningWindow();
  },
};
</script>

<style lang='less' scoped>
.container {
  height: 100vh;
  display: flex;
  .left {
    width: auto;
    overflow: hidden;
    background-color: rgb(0, 21, 41);
    .left-logo {
      width: 100%;
      background-color: rgb(0, 21, 41);
      border-right: 1px;
      color: #fff;
      height: 55px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .menu-vertical {
      height: 100%;
      border-right: 1px;
    }
    .menu-vertical:not(.el-menu--collapse) {
      width: 220px;
      // min-height: 400px;
    }
  }
  .right {
    flex-grow: 1;
    background-color: rgb(239, 241, 244);
    .right-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      font-size: 16px;
      .right-header-collapse {
        cursor: pointer;
      }
      .right-header-avatar {
        display: flex;
        align-items: center;
        .right-gap {
          padding-right: 20px;
        }
        .pointer {
          cursor: pointer;
        }
      }
    }
    .right-main {
      padding: 12px 10px;
      .view {
        background-color: #fff;
      }
    }
    .right-footer {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }
}
</style>