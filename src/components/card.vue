<template>
  <div class="res-card">
      <main>
          <div class="top">
            <img src="../assets/img/resurrection2.png" alt="">
            <p>每场最多可使用1次复活机会，答错自动使用</p>
          </div>
          <div class="bottom">
            <img src="../assets/img/resurrection4.png" alt="">
            <p>每累计邀请3位好友注册积土学吧即可获得1次复活机会和1次进场答题的机会，多邀请多得。</p>
            <div class="invitation">
              <a>立即邀请</a>
            </div>
          </div>
      </main>
  </div>

</template>

<script>
    export default {
        "name": "card",
        data() {
            return {}
        }
    }
</script>

<style scoped>
  .res-card{
    width: 100%;
    height: 100%;
    background-image: linear-gradient( 0deg, rgb(89,50,205) 0%, rgb(42,16,118) 100%);
  }
  main{
    width: 92%;
    height: 100%;
    margin: 0 auto;
    padding-top: 0.5rem;
    box-sizing: border-box;
  }
  main>.top{
    width: 100%;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  main>.top>img{
    width: 1.84rem;
    height: 1.66rem;
    margin: 0.6rem auto;
  }
  main>.top>p{
    font-size: 0.28rem;
    font-family: "PingFang";
    color: rgb(102, 102, 102);
    text-align: center;
    line-height: 2.5;
  }
  main>.bottom{
    width: 100%;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  main>.bottom>img{
    width: 1.38rem;
    height: 1.82rem;
    margin: 0.6rem auto;
  }
  main>.bottom>p{
    width: 5.82rem;
    margin: 0 auto;
    font-size: 0.28rem;
    font-family: "PingFang";
    color: rgb(102, 102, 102);
    text-align: center;
    line-height: 2.5;
  }
  main>.bottom>.invitation{
    width: 6.64rem;
    height:1.06rem ;
    border-radius: 1rem;
    background-image:linear-gradient( 0deg, rgb(84,58,197) 0%, rgb(131,55,194) 100%);
    box-shadow: 0px 1px 20px 0px rgba(179, 136, 235, 0.004);
    margin: 0.4rem auto;
  }
  main>.bottom>.invitation>a{
    display: block;
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    line-height: 1.06rem;
    text-align: center;
  }

</style>
