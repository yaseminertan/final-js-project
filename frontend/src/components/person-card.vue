<script>

export default {
    name:'personCard',
    props:['person'],
     computed:{
        personUrl(){
            return `/people/${this.person._id}`
        }
    }
}
</script>
<template lang="pug">
    article.card
        h4.card-title {{person.name}}
            
</template>

<style scoped>
    .card{
        color:rgb(145, 141, 141);
        display: inline-block;
        text-align: left;
        padding: 0 15px 0 15px;
        border-radius: 10px;
        margin: 20px;
        width: 300px;
        background: white;
   
    }
    .text{
        color:rgb(65, 62, 62);
        font-size: 15px;
        font-weight: lighter;
    }
    .router{
        text-decoration: none;
    }
    h5, h6{
        margin: 5px;
    }
</style>