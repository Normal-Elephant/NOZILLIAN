<template>
    <div id="setting">
        <div id="hd"><div id="no">设介定绍</div><span id="bt">SETTING INTRODUCING</span></div>
        <div class="m1"><img  id="tu1" src="./tu/地图.jpg" style="width: 95%;box-shadow: 10px 0 20px rgba(204,236,255,0.1);">
        <div class="wrap"><span class="psg" style="width:60px;margin-left:40px;font-size: 35px;color: white">势力分布</span>
            <div class="col1" style="border-right: 1px solid #bebebe;"><span class="psg"><span class="xbt"> 希文国:</span>拥有发达的生命科学技术、AI技术，独创ZILLION人类科技，并借此跃居当今第一大国，在黑日战争中靠Z人类军的力量夺回密州。右下p1为希文国旗。</span></div>
            <div class="col2"><span class="psg"><span class="xbt">曼国：</span> 核防护、制导反导科技发达。70年前一度制霸世界并占领希文国土密州，在黑日战争中元气大伤，险些使用核武与希文鱼死网破</span> </div>
            <div class="col1" style="border-right: 1px solid #bebebe;"><span class="psg"><span class="xbt">东临国：</span>科技树未偏科，在深度学习和AI方面有优势，很少参与战事。黑日战争时期与曼国结盟，但未能扭转战局</span> </div>
            <div class="col2"><span class="psg"><span class="xbt">密州：</span>曾被曼国殖民70年，黑日战争后回归希文。民风浮躁，战后各势力残党、黑帮潜伏各处。</span> </div>
        </div>
        </div><img id="tu2" src="./tu/拼.jpg" style="width: 35%;box-shadow: 0 10px 20px rgba(204,236,255,0.2);">
        <div class="m1 fb" >
            <span class="psg" style="width:350px;font-size: 30px;color:aliceblue;border-top:0.5px solid aliceblue;padding-top: 20px ">名词解释</span>
            <div class="wrap" style="height: 420px"><div class="gd">
                <div class="col3">
                    <span class="psg"><span class="xbt2">Tres-2B同步卫星：</span><br><br>
                        原为太阳系外小行星，在希文科学家诱导下，迁移出直径20公里的地球同步卫星。由有黑色有机生命流体T2构成。
                        耐高温、腐蚀以及剪切增稠流体的特性，硬度、形状可以由内核控制，内核则被希文培育出人类意识。
                        强紫外线照射下会意识失控并灼烧。
                        </span> </div>
                <div class="col3">
                    <span class="psg"><span class="xbt2">Zillian：</span><br><br>
                        有人类外壳的人造生命体统称Zillian；首批Zillian由希文生命科技用T2流体填充制成，并组建Z人类军。<br>
                        Z人类军的首领是保存了T2唯一生命内核的zillian（即角色Tres)，受到希文军方和科学界长期监督控制。
                        </span> </div>
                <div class="col3">
                    <span class="psg"><span class="xbt2">黑日战争：</span><br><br>
                      即公元2089年希文与曼国联盟间的战争。战时希文在夜间多次投入z人类军，其火力全开的样子像巨大的黑日笼罩地球。
                        </span> </div>
                <div class="col3">
                    <span class="psg"><span class="xbt2">Aillion模块：</span><br><br>
                      希文生命科学家结合Ai学习技术开发，弥补局部人体缺陷/强化人体的改造模块。特兰斯首相继位后在希文广泛用于医疗、教育、国防。
                        普通人在选择加入A人类军依法服役3年or被分配到国企上班后，可以免费接受Aillion改造。
                        </span> </div>
                <div class="col3">
                    <span class="psg"><span class="xbt2">NoZillian计划：</span><br><br>
                      黑日战争后期，Z人类军引发了全世界的恐慌，希文为避免曼国联盟扩大导致全面核战鱼死网破的局面而提出的zillion全面销毁计划。
                        </span> </div>
                <div class="col3">
                    <span class="psg"><span class="xbt2">AISX：</span><br><br>
                      希文最大Aillon模块供应商、最大互联网产品公司。起家不是国企，发达后被希文当成国企对待。
                        </span> </div>
                <div class="col3">
                    <span class="psg"><span class="xbt2">The Tres：</span><br><br>
                      密州两大黑帮之一，成员多为密州的激进派，高层与曼国右派议员勾结，是一个反希文组织。<br>右p3为The Tres的标志。
                        </span> </div>
                <div class="col3">
                    <span class="psg"><span class="xbt2">Startbuch：</span><br><br>
                      密州两大黑帮之一，黑日战争结束密州回归后兴起的帮派，常年与TheTres对峙。<br>右p2为Sartbuch的标志。
                        </span> </div>

            </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "setting"
    }
</script>

<style scoped>
    *{background: #363639;}
    #setting{margin: 0 auto;
        background:#363639;
        width: 800px;
        height: 1500px;z-index: -20;
    }#bt{margin: -40px  300px;float: right;color: aliceblue;background: black}
    #hd{background: black;height: 190px;position: relative;border-left:10px solid rgba(103,0,4,1);}
    #no{font-size: 60px;background: rgba(103,0,4,1);margin-left: 30px;
        padding-top:10px;height: 180px;width:150px;color: rgba(137,141,157,0.97)}
    #tu1{float: left}#tu2{float: right}
    .m1{background:#363639;border-right: 5px solid rgba(249,15,31,0.97);position: relative;float: left;
    }
    .fb{width:400px;border-left:6px solid rgba(249,15,31,0.97);border-right: none;padding-left: 90px;height: 520px;}
    .psg{float: left;margin:20px 10px;color: #bebebe;font-size: 12px}
    .col1, .col2,.xbt2 {width: 40%;float: left;}
    .col3{float: left;margin: 0 10px}
    .xbt, .xbt2{color: white;font-size: 15px;}
    .gd{overflow-x: hidden;width: 390px;overflow-y: auto;color: #000;font-size: 16px;height: 100%;box-shadow: 0 10px 50px rgba(0,0,0,0.3);}
    .gd::-webkit-scrollbar {width:5px;height:8px;}
    .gd::-webkit-scrollbar-thumb {-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);background:aliceblue;}
    .gd::-webkit-scrollbar-track {border-radius:0;background:rgba(0,0,0,0.1);}
</style>