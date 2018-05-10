<template>
    <div>this is a singger page</div>
</template>

<script>
  import {getSinger} from "../../api/singer";
  import {ERR_OK} from "../../api/config";

  export default {
    name: "singer",
    data(){
      return{
        singerData:''
      }
    },
    created(){
      this._getSinger();
    },
    methods:{
      _getSinger(){
        getSinger().then((res)=>{
          if (res.code==ERR_OK){
            console.log(res);
            this.singerData = res;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
