<template>  
  <div>  
    <h1>Products</h1>  
    <p>{{ num }}</p>  
    <input id="gte" type="num"> 
    <input id="lte" type="num"> 
    <button @click="sort()">sort</button>  
    <div v-for="p in Products" :key="p.id" class="cart">  
      <p>{{ p.title }}</p>  
      <p>{{ p.price }}</p>  
      <img :src="'http://localhost:8055/assets/'+ p.img.id" alt=""/> 
      <button @click="move(p.id)">click</button>  
    </div>  
  </div>  
</template>  
  
<script>  
import gql from "graphql-tag";  
export default {  
  apollo: {  
    Products: {  
      query: gql`  
        query products($limit: Int! $sort: [String!]!) {  
          Products(limit: $limit sort: $sort) {  
            id  
            title    
            price  
            img { 
        id 
        } 
          }  
        }`, 
        
      variables() {  
        return {  
          limit: this.limit,  
          sort: this.sort,  
        };  
      },  
    },  
  }, 
  apollo:{
 Products: {
   query: gql`
   query products($first: Float!, $second: Float!){
  Products (filter: {
    _and: [{
      price: {
        _gte: $first
      }
    },{
      price: { 
        _lte: $second 
      } 
    }]
  }){
    id
    title
    price
    img{
      id
    } 
}
}`,
 variables(){
   return {
    first: this.gte,
    second: this.lte
   }

 }}
  },
  data() {  
    return {  
      limit: 10,  
      sort: ["price"],  
      num: 0,
      gte: 0,
      lte: 100_000
    }  
  },  
  methods: {  
    move(id) {  
      this.$router.push("/products/" + id);  
    },  
    sort() {  
      this.gte = Number(document.getElementById('gte').value);  
      this.lte = Number(document.getElementById('lte').value);  
    }  
    },  
};  
</script>  
  
<style scoped>  
  .cart {  
    border: 1px solid black;  
    padding: 10px;  
  }  
</style>