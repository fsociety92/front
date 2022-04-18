<template>  
  <div>  
    <h1>product</h1>  
    <!-- <img :src="Products_by_pk?.Images[0].imageURL" alt="" style="width: 450px;"> -->  
    <p>{{ Products_by_id?.id }}</p>  
    <p>{{ Products_by_id?.title }}</p>  
    <p>{{ Products_by_id?.price }}</p>  

  </div>  
</template>  
  
<script>  
import gql from 'graphql-tag'  
export default {  
  apollo: {  
    Products_by_id: {  
      query: gql`  
      query product($id: ID!) {  
          Products_by_id(id: $id) {  
          id  
          title  
          price 
        }  
      }`,  
      variables() {  
        return {  
          id: this.$route.params.id,  
        };  
      },  
    }  
  }  
}  
</script>  
  
<style scoped>  
  
</style>