<template>
    <div class="reward">
      <ul class="details">
        <li>
          <div class="text">
            <div class="left">
              <p>全部答对12题及共赢奖励</p>
              <p>2018-02-15 22:42</p>
            </div>
            <p class="right">
              ￥212.00
            </p>
          </div>

        </li>
        <li>
          <div class="text">
            <div class="left">
              <p>答对1题奖励</p>
              <p>2018-02-15 22:42</p>
            </div>
            <p class="right">￥5.00</p>
          </div>
        </li>
        <li>
          <div class="text">
            <div class="left">
              <p>答对4题奖励</p>
              <p>2018-02-15 22:42</p>
            </div>
            <p class="right">￥20.00</p>
          </div>
        </li>

      </ul>
    </div>
</template>

<script>
    export default {
        "name": "reward",
        data() {
            return {}
        }
    }
</script>

<style scoped>
  .details{
    width: 100%;
    height: 98%;
    margin: 0 auto;
  }
  .details>li:first-of-type{
    margin-top: 0.4rem;
  }
  .details>li{
    width: 7.5rem;
    height: 1.4rem;
    border-bottom: 0.01rem solid #eeeeee;
  }
  .details>li>.text{
    width: 6.9rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .details>li>.text>.left>p:first-of-type{
    font-size: 0.32rem;
    font-family: "PingFang";
    color: rgb(102, 102, 102);
    line-height: 1.5;
  }
  .details>li>.text>.left>p:nth-of-type(2){
    font-size: 0.28rem;
    font-family: "SanFranciscoDisplay";
    color: rgb(153, 153, 153);
    line-height: 1.5;
  }
  .details>li>.text>.right{
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(255, 98, 89);
  }

</style>
