<template>
  <div class="tabs">
    <ul>
      <router-link :to="{name:'index'}" tag="li" exact>
        <div>
          <i class="icon iconfont icon-31shouye"></i>
        </div>
        <div>首页</div>
      </router-link>
      <router-link :to="{name:'classify'}" tag="li">
        <div>
          <i class="icon iconfont icon-zhubaoshipin"></i>
        </div>
        <div>分类</div>
      </router-link>
      <router-link :to="{name:'seek'}" tag="li">
        <div>
          <i class="icon iconfont icon-zhubaoshipin"></i>
        </div>
        <div>收藏</div>
      </router-link>
      <router-link :to="{name:'cart'}" tag="li">
        <div>
          <i class="icon iconfont icon-gouwucheman"></i>
        </div>
        <div>购物车</div>
      </router-link>
      <router-link :to="{name:'my',params:{user:'xu'}}" tag="li">
        <div>
          <i class="icon iconfont icon-wo"></i>
        </div>
        <div>我</div>
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {}
</script>
<style lang="less" type="text/less">
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;
    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }
    ul {
      display: table;
      width: 100%;
      & > li {
        text-align: center;
        font-size: 16px;
        display: table-cell;
        padding: 8px 12px;
        cursor: pointer;
        &.router-link-active{
          color: #D0021B;
        }
        & > div {
          font-size: 14px;
          & > i {
            font-size: 30px;
          }
        }
      }
    }
  }
</style>
