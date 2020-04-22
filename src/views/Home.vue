<template>
<div>
  <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators>
    <b-carousel-slide v-slot:img v-for="item in listObj">
      <template>
        <img style="height: 500px" class="d-block img-fluid w-100" v-bind:src="item.url" alt="image slot">
      </template>
    </b-carousel-slide>
  </b-carousel>
  <div id="main" style="width:400px;height:350px;backgroundColor:'pink'"></div>
</div>
</template> 

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import echarts from "echarts";
import { EChartOption } from 'echarts';

@Component
export default class Home extends Vue {

  private listObj: any[] =[
    {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587534433888&di=99b1d03f5a0c1cb087632185f4252b1f&imgtype=0&src=http%3A%2F%2Fpic137.huitu.com%2Fpic%2F20200128%2F1967565_20200128121327493033_0.jpg'},
    {url: 'https://picsum.photos/1024/480/?image=12'},
    {url: 'https://picsum.photos/1024/480/?image=12'}
  ];

  private created(): void {
    // action方法调用
    this.$store.dispatch('getUserInfo').then((res)=>{
      console.log(res);
    });
  }

  private mounted(): void {
    const myChart = echarts.init(document.getElementById('main'));
    let option: EChartOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };

    myChart.setOption(option);
  }
}
</script>
