<script setup>
import { reactive } from 'vue';
import Swiper from './Swiper.vue';
const date_time = reactive({ time_label: 0 });

class DateTime {
  constructor() {
    this.now = new Date();
    this.year = String(this.now.getFullYear()).padStart(4, '0');
    this.month = String(this.now.getMonth() + 1).padStart(2, '0');
    this.day = String(this.now.getDate()).padStart(2, '0');
    this.week = String(this.now.getDay()).padStart(2, '0');
    this.hour = String(this.now.getHours()).padStart(2, '0');
    this.minute = String(this.now.getMinutes()).padStart(2, '0');
    this.second = String(this.now.getSeconds()).padStart(2, '0');
  }

  getSysTime() {
    let now_date = this.year + '年' + this.month + '月' + this.day + '日 ';
    let now_time = this.hour + ':' + this.minute + ':' + this.second;
    return now_date + now_time;
  }
};

window.onload = function () {
  setInterval(() => {
    let time = new DateTime();
    date_time.time_label = time.getSysTime();
  }, 1000);
};

</script>

<template>
  <h1>Hello Vue</h1>
    <div id="time-label">{{ date_time.time_label }}</div>
    <div class="content"></div>
    <Swiper></Swiper>
</template>

<style scoped>
h1 {
  color: rgb(207, 121, 15);
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
}

.canvas-style {
  width: 400px;
  height: 400px;
  background-color: antiquewhite;
  fill: black;
}

#time-label {
  color: rgb(7, 107, 74);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: italic;
  font-size: 20px;
}
</style>
