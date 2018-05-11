<template>
    <div class="singer">this is a singger page</div>
</template>

<script>
  import {getSinger} from "../../api/singer";
  import {ERR_OK} from "../../api/config";
  import Singer from '@/common/js/singer'

  const HOT_NAME= '热门';
  const HOT_SINGER_LENGTH = 10;

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
            console.log(this._normalizeSinger(res.data.list));
            this.singerData = res.data.list;
          }
        })
      },
      _normalizeSinger(list){
        let map = {
          hot:{
            title:HOT_NAME,
            items:[]
          }
        }
        list.forEach((item,index)=>{
          if(index<HOT_SINGER_LENGTH){
            map.hot.items.push(new Singer({
              id:item.Fsinger_mid,
              name:item.Fsinger_name
            }));
          }
          const key = item.Findex;
          if(!map[key]){
            map[key] = {
              title:key,
              items:[]
            }
          }
          map[key].items.push(new Singer({
            id:item.Fsinger_mid,
            name:item.Fsinger_name
          }))
        })
        //为了得到有序列表，需要处理map
        let hot = []
        let ret = []
        for (let key in map){
          let val = map[key];
          if(val.title.match(/[a-zA-z]/)){
            ret.push(val)
          }else if(val.title==HOT_NAME){
            hot.push(val)
          }
        }
        ret.sort((a,b)=>{
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer{
    position: fixed
    top: 88px
    bottom:0
    width: 100%
  }
</style>
