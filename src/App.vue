<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" style="background: #6c757d !important;position: fixed;z-index: 99;width: 100%;">
    <b-navbar-brand href="/">Mask Statistics System</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item href="/" v-bind:class="{active: isActive==1}" @click="isActive=1">口罩统计一览</b-nav-item>
        <b-nav-item href="/#/about" v-bind:class="{active: isActive==2}" @click="isActive=2">口罩信息录入</b-nav-item>
        <b-nav-item href="#" v-bind:class="{active: isActive==3}" @click="isActive=3">当周口罩发放情况</b-nav-item>
        <b-nav-item href="#" v-bind:class="{active: isActive==4}" @click="isActive=4">疫情通报</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="相关信息查询"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">查询</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class APP extends Vue {
  public isActive: number = 1;
}
</script>

<style lang="scss">
  @import './assets/css/app.scss';
</style>
