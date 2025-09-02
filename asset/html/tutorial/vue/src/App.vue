<script setup>
import { reactive } from 'vue';

const date_time = reactive({ time_label: 0 });

function numberPad(Number = num) {
  return toString(num).padStart(2, '0');
}

function getSysTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let now_date = numberPad(year) + '年' + numberPad(month) + '月' + numberPad(date) + '日 ';
  let now_time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  return now_date + now_time;
}

setInterval(() => {
  date_time.time_label = getSysTime();
}, 1000);

</script>

<template>
  <h1>Hello Vue</h1>
  <div id="time-label">{{ date_time.time_label }}</div>
</template>

<style scoped>
h1 {
  color: rgb(207, 121, 15);
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
}

#time-label {
  color: rgb(7, 107, 74);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: italic;
}
</style>
