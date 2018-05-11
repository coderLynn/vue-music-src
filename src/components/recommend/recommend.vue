<template>
    <div class="recommend" ref="recommend">
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
          <div v-if="recommends.length" class="slider-wrapper">
            <slider>
              <div v-for="item in recommends">
                <a :href="item.linkUrl"><img @load="loadImage" class="needsclick" :src="item.picUrl"></a>
              </div>
            </slider>
          </div>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li class="item" v-for="item in discList">
                <div class="icon">
                  <img width="60px" height="60px" v-lazy="item.imgurl" alt="">
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="loading-container" v-show="!discList.length">
          <loading></loading>
        </div>
      </scroll>
    </div>
</template>

<script>
  import Scroll from '@/base/scroll/scroll'
  import Slider from '@/base/slider/slider'
  import Loading from '@/base/loading/loading'
  import {getRecommend,getDiscList} from "../../api/recommend";
  import {ERR_OK} from "../../api/config";

  export default {
    data(){
      return {
        recommends:[],
        discList:[]
      }
    },
    name: "recommend",
    created(){
      document.getElementsByTagName('body')[0].style.margin='0';
      this._getRecommend();
      setTimeout(()=>{
        this._getDiscList();
      },2000)
      // this._getDiscList();
    },
    methods:{
      _getRecommend(){
        getRecommend().then((res)=>{
          if(res.code==ERR_OK){
          this.recommends = res.data.slider;
        }
        })
      },
      _getDiscList(){
        getDiscList().then((res)=>{
          if(res.code==ERR_OK){
          this.discList = res.data.list
        }
        })
      },
      loadImage(){
        if(!this.checkLoaded){
          this.$refs.scroll.refresh();
          this.checkLoaded = true;
        }
      }
    },
    components:{
      Slider,
      Scroll,
      Loading
    }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /*@import "~common/stylus/variable"*/

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        ul{
          padding-left: 10px;
        }
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: 16px
          color: #333333
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: 14px
            .name
              margin-bottom: 4px
              color: #333333
              font-size: 16px;
            .desc
              color:#333333
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
