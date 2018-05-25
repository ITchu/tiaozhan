<template>
  <div class="start">
    <main v-if="status==1" class="one">
      <div class="top">
        <img src="../assets/img/challenge.png" alt="">
      </div>
      <div class="center">
        <p>即将开始...</p>
      </div>
      <div class="bottom">
        <p>答对12题，共赢</p>
        <img src="../assets/img/ten.png" alt="">
        <div class="time">
          <p>每周六晚上19:30自动开始</p>
        </div>
      </div>
    </main>
    <main v-else-if="status==2" class="two">
        <p>{{time}}</p>
    </main>
    <main v-else-if="status==3" class="three">
        <div class="answer">
          <div class="outer">
            <div class="inner base"  v-if="clock">
              <div class="circle base left"></div>
              <div class="circle base right"></div>
            </div>
            <div v-if="answer=='no'" class="answer2">
              <img src="../assets/img/no.png" alt="">
            </div>
            <div v-if="answer==null" :class="{title:true,color:color}">{{answer_time}}</div>
            <div v-if="answer=='yes'" class="answer2">
              <img src="../assets/img/yes.png" alt="">
            </div>
          </div>
          <div :class="{topic:true,zoomIn:zoomIn,zoomOut:zoomOut}">
            <p>{{question_title}}</p>
            <ul class="result">
              <li v-for="(item,index) in items" @click="confirmAnswer(index)" :key='index'
                  :class="{isActive:index==isActive,wrongActive:index==wrongActive,active:index==active}">
                <p>{{item.v}}</p>
              </li>
            </ul>
          </div>
        </div>
        <p v-if="result==1">您已被淘汰，可观战，不能答题...</p>
        <p v-if="result==2">答题人数已满，可观战，不能答题...</p>
        <div v-if="wrong" class="revived">
              <div  v-if="out" class="wrong">
                  <img src="../assets/img/close.png" alt="" @click="wrong=false;click=true">
                  <p>您被淘汰了</p>
                  <p>分享到不同的微信群，<br>邀请三位好友注册即可获得复活卡</p>
                  <div class="fen">
                      <a>分享</a>
                  </div>
              </div>
              <div v-if="opportunity" class="opportunity">
                  <img src="../assets/img/close.png" alt="" @click="wrong=false;">
                  <p>已为您自动复活</p>
                  <p>消耗一次复活机会，您可以继续答题</p>
              </div>
        </div>
    </main>
    <main v-else-if="status==4" class="four">
      <div class="top">
        <p>{{people_num}}人获得学习奖励券</p>
      </div>
      <div class="center">
        <p>连续答对{{num}}题</p>
        <img src="../assets/img/icon_cup.png" alt="">
        <p v-show="show">暂未获得奖励！分享到不同的微信群,邀请三位好友注册即可获得复活卡哦</p>
        <div class="enjoy">
          <a href="">分享战绩</a>
        </div>
      </div>
      <a href="" class="bottom">查看我的奖励劵</a>
    </main>
  </div>
</template>
<script>
    export default {
        "name": "start",
        data() {
            return {
              status:3,//状态：1.即将开始  2.倒计时 3.答题中 4.结果
              time:'答题开始',//答题开始倒计时
              answer_time:null,//答题时间倒计时
              result:null,//角色  淘汰者  旁观者
              color:true,//答题状态颜色
              answer:null,//答案是否正确：no不正确 yes正确  null
              items:null,//题目选项
              question_title:null,//题目
              currentIndex:1,//第几题
              click:false,//点击状态 false 未点击 true点击了
              isActive:-1,//自己选中项标记
              wrongActive:-1,//错误选项标记
              active:-1,//正确选项标记
              people_num:null,//获得奖励券的人数
              num:null,//答对的题数
              show:false,//答对0题
              wrong:false,//答错情况
              out:false,//淘汰
              opportunity:false,//复活
              revived:1,//复活机会
              clock:false,//圆弧倒计时
              zoomIn:false,//题目进入动画
              zoomOut:false,//题目出去动画

            }
        },
      methods:{
        init:function () {
          this.answer_time=null;
          this.color=true;
          this.answer=null,
          this.isActive=-1;
          this.wrongActive=-1;
          this.active=-1;
          this.status=3;
          this.clock=false;
          this.zoomIn=true;
          this.zoomOut=false;
          this.click=false;
        },
        confirmAnswer: function(answer) {
          if(this.click){
            return;
          }
          this.isActive=answer;
          switch (answer){
            case '1':
              answer='A';
              break;
            case '2':
              answer='B';
              break;
            case '3':
              answer='C';
              break;
            case '4':
              answer='D';
              break;
          }
          this.click=true;
          this.$socket.emit("confirmAnswer", {
            id: '1',
            answer: answer || 0,
            time: 5
          });
        },
      },
      sockets:{
        joined: function(data) {
          this.status = 1;
          console.log('加入房间成功');
        },
        start: function() {
          this.status = 2;
          var i=5;
          var t=setInterval(()=>{
            if(i==1){
              clearInterval(t);
              }
            this.time=i;
            i--;
          },1000);
        },
        question: function(data) {
          this.init();
          if(this.result==1||this.result==2){
            this.wrong=false;
            this.out=false;
            this.opportunity=false;
            this.click=true;
          }
          var y=10;
          this.answer_time=y+'s';
          var answer1=JSON.parse(data.question_answer);
          this.currentIndex = data.question_index;
          this.question_title=data.question_title;
          let answers2 = [];
          for (let key in answer1) {
                 answers2.push({
                   'k': key,
                   'v': answer1[key]
                 })
               };
          this.items=answers2;
          this.clock=true;
          var t2=setInterval(()=>{
            this.answer_time=y+'s';
            if(y<1){
              if(this.isActive==-1 && y==0){
                this.clock=false;
                this.answer='no';
                this.wrong=true;
                if(this.revived==0 && this.result!=1){
                  this.out=true;
                  this.result=1;
                  this.opportunity=false;
                }
                else{
                  var z=3;
                  var t3=setInterval(()=>{
                    if(z<1){
                      this.wrong=false;
                      this.opportunity=false;
                      clearInterval(t3);
                      return;
                    }
                    this.opportunity=true;
                    this.revived=0;
                    z--;
                  },1000)
                }
             }
              clearInterval(t2);
             this.zoomOut=true;
             this.zoomIn=false;
            }
            y--;
          },1000)
        },
        answerConfirmd:function (data) {
          switch (data.rightAnswer){
            case 'A':
              data.rightAnswer='0';
              break;
            case 'B':
              data.rightAnswer='1';
              break;
            case 'C':
              data.rightAnswer='2';
              break;
            case 'D':
              data.rightAnswer='3';
              break;
          }
          if(this.isActive==data.rightAnswer){
            this.clock=false;
            this.answer='yes';
            this.active=data.rightAnswer;
            return ;
          }
          this.answer='no';
          this.wrongActive=this.isActive;
          this.active=data.rightAnswer;
          this.wrong=true;
          if(this.revived==0 && this.result!=1){
            this.out=true;
            this.result=1;
            this.opportunity=false;
          }
          else{
            var z=3;
            var t3=setInterval(()=>{
              if(z<1){
                this.wrong=false;
                this.opportunity=false;
                clearInterval(t3);
                return;
              }
              this.opportunity=true;
              this.revived=0;
              z--;
            },1000)
          }
          this.clock=false;
        },
        revived:function (data) {
          console.log("复活成功");
        },
        result:function (data) {
          this.people_num=data.people_num;
          this.num=data.num;
          if(data.num==0){
            this.show=true;
          }
          if(this.out){
            this.status=3;
            return;
          }
            this.status=4;
        }
      },
      mounted(){
        var uid=1,uname='k';
        if (uid) {
          this.$socket.emit("join", {
            userid: uid,
            username: name
          });
        }
      }
    }
</script>
<style scoped>
  @import "../assets/css/clock.css";
  @import "../assets/css/animate.css";
  .start{
    width: 100%;
    height: 100%;
    background-image: linear-gradient( 0deg, rgb(89,50,205) 0%, rgb(42,16,118) 100%);
  }
  /*即将开始*/
  .one{
    width: 100%;
    height: 89%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
  }
  .one>.top{
    width: 6.88rem;
    margin: 0.22rem auto 0;
  }
  .one>.top>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .one>.center{
    width: 4.4rem;
    height: 1rem;
    border-radius: 1rem;
  }
  .one>.center>p{
    font-size: 0.34rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    line-height: 1rem;
    text-align: center;
    text-shadow: 0 0.01rem 0 rgba(122, 14, 14, 0.004);
  }
  .one>.bottom>p{
    font-size: 0.60rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 1.5;
    margin-bottom: 0.66rem;
  }
  .one>.bottom>img{
    display: block;
    width:5.37rem;
    height: 1.12rem;
    margin:  0 auto 0.94rem;
  }
  .one>.bottom>.time{
    width: 6.64rem;
    background:url("../assets/img/footer.png") no-repeat center;
    background-size:  100% 100%;
    margin: 0 auto;
  }
  .one>.bottom>.time>p{
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(42, 16, 118);
    line-height: 1.44rem;
    text-align: center;
  }
  /*倒计时*/
  .two{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .two>p{
    margin-top: -1.2rem;
    font-size: 1.2rem;
    font-family: "PingFang";
    color: rgb(251, 219, 49);
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 1px 10px rgba(179, 136, 235, 0.004);
  }
  /*答题页*/
  .three{
    width: 100%;
    height: 100%;
    padding-top: 1.52rem;
    box-sizing: border-box;
  }
  .answer{
    background-color: white;
    border-radius: 0.2rem;
    width: 92%;
    height: 89%;
    margin: 0 auto 0.58rem;
  }
  .answer>.outer{
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    left:0;
    right: 0;
    margin: auto;
    top:-0.8rem;
    background-color: #ffffff;
    border-radius: 50%;
  }

  .answer>.outer>.title{
    background: #ffffff;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    left:0.18rem;
    top: 0.18rem;
    border-radius: 50%;
    text-align: center;
    line-height: 1.25rem;
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(153, 153, 153);
    font-weight: bold;
    z-index: 2;
  }
  .answer>.outer>.color{
    color: #291076;
  }
  .answer>.outer>.answer2{
    left:0.08rem;
    top: 0.08rem;
    position: absolute;
    width: 1.44rem;
    height: 1.44rem;
    z-index: 3;
  }
  .answer>.outer>.answer2>img{
    display: block;
    width: 100%;
    height:100%;
  }
  .answer>.topic{
    width: 6.36rem;
    height: 7.68rem;
    margin: -0.4rem auto;
    background-color: #ffffff;
  }

  .answer>.topic>p{
    font-size: 0.34rem;
    font-family: "PingFang";
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin-bottom: 0.6rem;
  }
  .answer>.topic>.result{
    width: 6.36rem;
    height: 7.28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .answer>.topic>.result>li{
    width: 6.36rem;
    height: 1.1rem;
    border-radius: 1.1rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 20px 0px rgba(41, 17, 118, 0.2);
    font-size: 0.32rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: rgb(51, 51, 51);
  }
  .answer>.topic>.result>li.isActive{
    background-color:#543ac5 ;
    color: rgb(255,255,255);
  }
  .answer>.topic>.result>li.active{
    background-color:#70e183 ;
    color: rgb(255,255,255);
  }
  .answer>.topic>.result>li.wrongActive{
    background-color:#ff6259 ;
    color: rgb(255,255,255);
  }
  .answer>.topic>.result>li>p{
    margin: 0.2rem auto;
    width: 80%;
    font-family: "PingFang";
    line-height: 0.4rem;
    overflow: hidden;
    max-height: 0.8rem;
  }
  .three>p{
    font-size: 0.28rem;
    font-family: "PingFang";
    color: rgb(251, 219, 49);
    line-height: 1.5;
    text-align: center;
  }
  .three>.revived{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(153,153,153,0.8);
  }
  .three>.revived>.wrong{
    position: relative;
    left:50%;
    top: 50%;
    margin-left: -2.9rem;
    margin-top: -2.6rem;
    width: 5.8rem;
    height:5.2rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    padding-top: 1rem;
    box-sizing: border-box;
  }
  .three>.revived>.wrong>img,.three>.revived>.opportunity>img{
    position: absolute;
    right: 0.38rem;
    top: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
  }
  .three>.revived>.wrong>p:first-of-type,.three>.revived>.opportunity>p:first-of-type{
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(51, 51, 51);
    text-align: center;
  }
  .three>.revived>.wrong>p:nth-of-type(2),.three>.revived>.opportunity>p:nth-of-type(2){
    margin-top: 0.4rem;
    font-size: 0.30rem;
    font-family: "PingFang";
    color: rgb(102, 102, 102);
    text-align: center;
  }
  .three>.revived>.wrong>.fen{
    margin: 0.7rem auto 0;
    width: 4.8rem;
    height:0.9rem ;
    border-radius: 1rem;
    background-image:linear-gradient( 90deg, rgb(84,58,197) 0%, rgb(131,55,194) 100%);
    box-shadow: 0px 1px 20px 0px rgba(179, 136, 235, 0.004);
    text-align: center;
  }
  .three>.revived>.wrong>.fen>a{
    display: block;
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    line-height: 0.9rem;
  }
  .three>.revived>.opportunity{
    padding-top: 1rem;
    box-sizing: border-box;
    position: relative;
    left:50%;
    top: 50%;
    margin-left: -2.9rem;
    margin-top: -1.55rem;
    width: 5.8rem;
    height:3.1rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
  }

  /*结果页*/
  .four{
    width: 100%;
    height: 98%;
    border-top: 0.01rem solid #6c5aa4;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
  }
  .four>.top{
    width: 6.64rem;
    background:url("../assets/img/footer.png") no-repeat center;
    background-size:  100% 100%;
    margin: 0 auto;
  }
  .four>.top>p{
    display: block;
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(42, 16, 118);
    line-height: 1.44rem;
    text-align: center;
  }
  .four>.center{
    width: 6.9rem;
    height: 7.5rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
  }
  .four>.center>p:first-of-type{
    font-size: 0.4rem;
    font-family: "PingFang";
    color: rgb(153, 153, 153);
    font-weight: bold;
    line-height: 1.6rem;
    text-align: center;
  }
  .four>.center>img{
    display: block;
    width: 2.3rem;
    height: 2.4rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  .four>.center>p:nth-of-type(2){
    font-size: 0.34rem;
    font-family: "PingFang";
    color: rgb(102, 102, 102);
    margin: 0 0.6rem 0.5rem 0.6rem;
  }
  .four>.center>.enjoy{
    width: 6.3rem;
    border-radius: 1rem;
    background-image:linear-gradient( 90deg, rgb(84,58,197) 0%, rgb(131,55,194) 100%);
    box-shadow: 0px 1px 20px 0px rgba(179, 136, 235, 0.004);
    margin: 0  auto 0.56rem;
  }
  .four>.center>.enjoy>a{
    display: block;
    font-size: 0.36rem;
    font-family: "PingFang";
    color: rgb(255, 255, 255);
    line-height: 1.06rem;
    text-align: center;
  }
  .four>.bottom{
    display: block;
    font-size: 0.34rem;
    font-family: "PingFang";
    color: rgb(237, 237, 237);
    line-height: 0.706;
    text-align: center;
  }
</style>
