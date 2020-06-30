<template>
    <div id="mainstory">
    <div id="mima">
        <span style="color: #bebebe;top: 100px">请输入六位启动密码</span><br>
        <span id="shibai" style="display: none;background:rgba(0,0,0,0.1);margin-top: 10px;color: rgba(195,116,128,0.97)">密码错误</span>
        <input type="password" id="pswd">
    <br><br>
    <input type="button" v-on:click="panduan" id="yuan" value="ENTER"><br><br>
        <span style="color:rgba(190,190,190,0.8);font-size: 9px;background:rgba(0,0,0,0.1);">提示：启动密码在人物小传里</span>
    </div>
        <div id="chenggong"  style="display: none">
           <div class="dian"></div><p class="passage">希文由于偏科发展改造人技术，反导反核能力较弱。2089年前夕，东曼联盟决定投入核武。
                   希文军方听闻，考虑到鱼死网破大可不必，同时Aillon模块技术已基本成熟。希文设计使Tres失控，借此销毁全部Zillion这一对世界造成恐慌的人种，
            卸任首相，
                   以求与曼国妥协。 Tres脑部Aillion模块附带的禁制因此失效，认清了希文的丑恶阴谋。
                   <br>Tres逃亡中被退居二线的栗原知红子相救，栗原了解后联系战时认识的曼国议员，在其帮助下于密州建立TheTres帮派，并易名为特雷斯，
               </p>
            <div class="dian"></div><p class="passage">密州暴乱结束，Axr小队把特雷斯押到AISX旗下实验室
            给他重新挂上脑部抑制意识的模块。过程中，Axr发现自己的Aillion耳部模块似乎与思维神经相连，多年一直在压抑自己的个性思维
            ——这也是为何免费的模块改造需要强制服役/到国企上班，Aillion从出产就带有禁制，目的是培养一批无条件服从国家的员工。
            </p>
            <div class="dian"></div><p class="passage">同时，特雷斯在AISX实验室发现，
            AISX的基层员工面无表情，举止机械地趋同，行为诡异。特雷斯怀疑AISX内部已经在脑部模块产生了”AI疫情“。
        </p>
            <div class="dian"></div><p class="passage">特雷斯的人类外壳是按照特兰斯首相30岁时的模样雕刻的
        </p>
            <div class="dian"></div><p class="passage">Trans&76%￥*……3））*--）&8@`&￥#……&,+_!!!
        </p>

        </div>

    </div>

</template>

<script>
    export default {
        name: "mainstory",
        methods: {
            panduan: function () {
                //获取输入的答案
                var psw=document.getElementById("pswd");
                let shibai = document.getElementById("shibai");
               let tongguo = document.getElementById("chenggong");
                if (psw.value ==999999){
                    console.log('你牛逼');
                    shibai.style.display = "none";
                    psw.style.display = "none";
                    tongguo.style.display="block";
                    document.getElementById('mima').style.display = "none";
                }else {
                    console.log('你真菜');
                    shibai.style.display = "block";
                }
                //判分


            }
        }
    }

</script>

<style scoped>
    *{background: rgba(65,21,21,0.5);
    text-align: center;}

    #mainstory{ color: white;
    height:600px}
    #chenggong ,#mima{position: absolute;
        margin-left: 10%;
        margin-top: 100px;
        border-radius: 10px;background:rgba(0,0,0,0.5);
        box-shadow: 0 10px 50px rgba(0,0,0,0.3);
        padding-top: 80px;
    }
    #mima{height: 320px;
        width: 550px;
        max-width: 600px;}

    #chenggong{
        position: absolute;
        height: 370px;
        width: 510px;padding-top: 50px;padding-left: 40px;
        max-width: 600px;
        background:rgba(0,0,0,0.5);
     overflow-x: hidden;overflow-y: auto;font-size: 12px
    }
    .dian{width: 15px;height: 15px;background: #b60000;margin-left:30px;margin-bottom: -35px}
    #yuan{width: 80px;
    height: 80px;background: #646464;
        margin-top: 10px;
    border-radius:50%;
    border: none}
    #pswd{width: 280px;height: 30px;margin-top: 20px;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        background: #3f3636;
        outline: none;
        padding: 3px 0 3px 3px;

        border-radius: 20px;
    border: none}
    #pswd:hover,#pswd:focus{box-shadow: 0 0 25px rgba(161,10,35,1);
        padding: 5px 0 5px 3px;
        border: rgba(161,10,35,1) 1px solid;
        background: #977e7e;
    }
    .passage{background:rgba(0,0,0,0.2);padding: 20px 60px;text-align: left;line-height: 23px;
        width: 80%;margin-top:0;
    }
   #chenggong::-webkit-scrollbar {width:5px;height:8px;}
    #chenggong::-webkit-scrollbar-thumb {-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);background:aliceblue;}
    #chenggong::-webkit-scrollbar-track {border-radius:0;background:rgba(0,0,0,0.1);}
</style>