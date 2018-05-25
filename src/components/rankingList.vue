<template>
  <div class="rankingList">
    <main>
      <header>
        <div class="title">
          <span>总榜</span>
          <span>本周</span>
        </div>
      </header>
      <ul class="ranking">
        <li class="oneself">
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>
        <li>
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>
        <li>
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>
        <li>
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>
        <li>
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>
        <li>
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>
        <li>
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>
        <li>
          <div class="main">
            <span>21</span>
            <div class="people">
              <img src="../assets/img/people.png" alt="">
              <span>听见稻城</span>
            </div>
            <span class="money">
                                  ￥688.00
                              </span>
          </div>
        </li>

      </ul>
  </main>
  </div>
</template>

<script>
    export default {
        "name": "rankingList",
        data() {
            return {}
        }
    }
</script>

<style scoped>
  .rankingList{
    width: 100%;
    height: 100%;
    background-image: linear-gradient( 0deg, rgb(89,50,205) 0%, rgb(42,16,118) 100%);
  }
  main{
    width: 100%;
    height: 100%;
    padding-top: 0.4rem;
    box-sizing: border-box;
  }
  header{
    width: 100%;
    height: 13%;
  }
  header>.title{
    width: 5.2rem;
    background: url("../assets/img/ranking.png") no-repeat center;
    background-size: 5.2rem 0.8rem;
    margin:0 auto;
  }
  .title>span{
    width: 2.45rem;
    height: 0.6rem;
    display: inline-block;
    font-size: 0.34rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    text-align: center;
    vertical-align: middle;
  }
  .ranking{
    width: 92%;
    height: 87%;
    margin: 0 auto;
  }
  .ranking>li{
    width: 6.9rem;
    height: 1.2rem;
    border-bottom: 0.01rem solid #3b1d97;
  }
  .ranking>li>.main{
    width: 6.3rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ranking>li>.main>span{
    font-size: 0.34rem;
    font-family: "HYk2gj";
    color: rgb(255,255,255);
    line-height: 1.2rem;
  }
  .ranking>.oneself{
    color:rgb(255,255,255);
  }
  .ranking>li:nth-child(2) span,.ranking>li:nth-child(3) span{
    color: rgb(251, 219, 49);
  }
  .ranking>li:nth-child(4) span{
    color: rgb(251, 219, 49);
  }
  .ranking>li>.main>.people{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.3rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    margin-left: -1.5rem;
  }
  .ranking>li>.main>.people>img{
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    margin-right:0.2rem ;
  }
  .ranking>li> span{
    font-size: 0.3rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
  }
</style>
