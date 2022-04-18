<template>
  <div>
    <h1>Home</h1>
    <p>{{ num }}</p>
    <input id="asd" type="num">
    <button @click="asd()">click</button>
    <!-- <input type="num" v-model="num"> -->
  </div>
</template>

<script>
export default {
data (){
  return{
    num:0
  };
},
methods:{ 
    asd(){ 
      this.num = document.getElementById('asd').value; 
    } 
  },
}
</script>

<style>

</style>