<template>
  <ul class="rules">
    <li>
      <p>1.答题共赢大奖</p>
      <p>国学文化、国医养生知识竞赛，每周六晚上19：30准点答题，答对12题即共赢10万大奖。 </p>
    </li>
    <li>
      <p>2.活动参与资格</p>
      <p>每位用户仅有一次无条件（无门槛）参与答题比赛的机会，第二次之后需邀请累计满3人才可获得1次进场答题机会；
        每场答题人数最多1000人，玩进场答题的用户只能围观答题或在下次参与。</p>
    </li>
    <li>
      <p>3.活动规则</p>
      <p>(1)用户可在活动开始前60秒进场，开始答题后，迟到的用户只能围观，不能答题，围观者不能瓜分本场奖金；<br>
        (2)每场活动最多12题，每题答题时间只有10秒，超时未答或回答错误将被淘汰哦，只能围观；<br>
        (3)每场活动，回答错误，最多只有一次自动复活答题的机会。每场累计邀请3位新用户注册即可获取1次复活机会及进场答题机会，
        邀请越多答题机会越多。
      </p>
    </li>
    <li>
      <p>4.结果公布</p>
      <p>每场答题结束即展示每周答题排行成绩。</p>
    </li>
    <li>
      <p>5.奖项设置</p>
      <p> 每场活动均发放10万元学习奖励券。</p>
    </li>
    <li>
      <p>6.活动对象</p>
      <p>积土学吧所有用户。</p>
    </li>
    <li>*以上活动规则说明最终解释权归积土学吧所有</li>
  </ul>
</template>

<script>
    export default {
        "name": "rules",
        data() {
            return {}
        }
    }
</script>

<style scoped>
  .rules{
    width: 100%;
    height: 98%;
    margin: 0 auto;
  }
  .rules>li:first-of-type{
    margin-top: 0.4rem;
  }
  .rules>li{
    width: 6.9rem;
    font-size: 0.3rem;
    color: rgb(51, 51, 51);
    line-height: 1.33;
    margin: 0 auto 0.4rem;
  }
  .rules>li>p:first-of-type{
    font-weight: 600;
    line-height: 1.5;
  }
</style>
