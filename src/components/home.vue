<template>
  <div class="start">
    <main>
      <div class="top">
        <img src="../assets/img/start2.png" alt="">
      </div>
      <div class="center">
        <p v-if="false">答题时间未到</p>
        <router-link to="start" v-else="true">进入答题</router-link>
      </div>
      <p>每周六晚上19:30自动开始</p>
      <div class="bottom">
        <div class="one">
          <router-link to="reward">累计答题奖励</router-link>
          <router-link to="card">复活机会</router-link>
        </div>
        <div class="two">
          <span>0元</span>
          <span>2</span>
        </div>
        <div class="card">
          <a>我要复活卡</a>
        </div>
      </div>
      <div class="more">
        <router-link to="rules">比赛规则</router-link>
        <span>|</span>
        <router-link to="rankingList">获奖榜单</router-link>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .start{
    width: 100%;
    height: 100%;
    background-image: linear-gradient( 0deg, rgb(89,50,205) 0%, rgb(42,16,118) 100%);
  }
  main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  main>.top{
    width: 6.9rem;
    margin-top: 0.6rem;
    margin-bottom: -0.9rem;
  }
  main>.top>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  main>.center{
    margin-bottom: -0.6rem;
    width: 4.4rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: rgb(244, 214, 73);
    box-shadow: 0 0.06rem 0  rgb(165, 143, 42);
  }
  main>.center>a{
    display: block;
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(255, 47, 91);
    text-align: center;
    text-shadow: 0px 1px 0px rgba(122, 14, 14, 0.004);
    line-height: 1rem;
    font-weight: 800;
  }

  main>.center>p{
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    line-height: 1rem;
    text-align: center;
    text-shadow: 0px 1px 0px rgba(45, 45, 45, 0.004);
    font-weight: 800;
  }
  main>p{
    font-size: 0.28rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    text-align: center;
  }
  main>.bottom{
    background: url("../assets/img/start3.png") no-repeat center;
    background-size: 100% 100%;
    width:6.9rem;
  }
  main>.bottom>.one{
    font-size: 0.32rem;
    font-family: "PingFang";
    margin-top: 0.95rem;
    display: flex;
    justify-content: space-around;
  }
  main>.bottom>.one>a{
    color: rgb(51, 51, 51);
  }
  main>.bottom>.two{
    font-size: 0.30rem;
    font-family: "PingFang";
    color: rgb(51, 51, 51);
    text-align: center;
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-around;
  }
  main>.bottom>.card{
    width: 6.3rem;
    height:1.06rem ;
    margin: 0.6rem auto;
    border-radius: 1rem;
    background-image:linear-gradient( 90deg, rgb(84,58,197) 0%, rgb(131,55,194) 100%);
    box-shadow: 0px 1px 20px 0px rgba(179, 136, 235, 0.004);
    text-align: center;
  }
  main>.bottom>.card>a{
    display: block;
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    line-height: 1.06rem;
  }
  main>.more{
    text-align: center;
    font-size: 0.3rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
  }
  main>.more>a{
    color: rgb(255, 255, 255);
  }
  main>.more>a:first-of-type{
    margin-right: 0.3rem;
  }
  main>.more>a:last-of-type{
    margin-left: 0.3rem;
  }

</style>
