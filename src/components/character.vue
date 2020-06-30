<template>
    <div id="character">
        <div id="hd"><div id="no">人小物传</div><span id="bt">CHARACTER BIOGRAPHY</span></div>

            <div class="card">
                <input type="radio" name="select" id="slide_1" checked>
                <input type="radio" name="select" id="slide_2">
                <input type="radio" name="select" id="slide_3">
                <input type="checkbox" id="slideImg">

                <div class="slider">
                    <label for="slide_1" class="slide slide_1"></label>
                    <label for="slide_2" class="slide slide_2"></label>
                    <label for="slide_3" class="slide slide_3"></label>
                </div>
                <div class="inner_part">
                    <div class="content content_1">
                        <div class="chars c1">
                            <div class="text1"><img class="imge" src="./tu/hb.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">Lots-2</span><br>
                                <span class="nr">Starbuch代理首领，黑日战争时期在密州服刑，出狱后一直在给原首领打工</span>



                            </div>
                        </div>
                        <div class="chars c1">
                            <div class="text1"><img class="imge" src="./tu/l.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">Lily-Z</span><br>
                                <span class="nr">Starbuch核心成员之一，一个超级偏计科的暴力高中女生</span>



                            </div>
                        </div>
                        <div class="chars c1">
                            <div class="text1"><img class="imge" src="./tu/a.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">安</span><br>
                                <span class="nr">东临国一线唱跳明星，老家在密州。密州暴乱时期与Lots-2相识并试图平息乱象</span>



                            </div>
                        </div>
                        <div class="chars c1">
                            <div class="text1"><img class="imge" src="./tu/问号.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">特兰斯·埃文</span><br>
                                <span class="nr">希文首相。提出NoZillion计划终结黑日战争，接受Aillion皮肤模块并上任，以身宣传Aillion技术赢得了一定威信，立志打造世界共和体</span>



                            </div>
                        </div>
                    </div>
                </div>
                <div class="inner_part">
                    <div class="content content_2">

                        <div class="chars c2">
                                <div class="text1"><img class="imge" src="./tu/ly.jpg"></div>
                                <div class="text2">
                                    <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">栗原 知红子</span><br>
                                    <span class="nr" style="width: 300px">前东临士兵，曾卧底希文并接受Aillion皮肤替换。黑日战争中全队被Tres团灭后退居东临安定区养伤，开了家面馆。</span>



                            </div>
                        </div>
                        <div class="chars c2">
                            <div class="text1"><img class="imge" src="./tu/ms.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">沢 明山</span><br>
                                <span class="nr">栗原面馆的厨师。原东临国Ai-vtuber公司脑部算法工程师。辞职原因是编程好累。</span>



                            </div>
                        </div>
                        <div class="chars c2">
                            <div class="text1"><img class="imge" src="./tu/问号.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">源 天武</span><br>
                                <span class="nr">NoZillan计划执行后，东临参考希文Z人类军，结合东临特色Ai模块算法，暗中研发的首个东临Zillian，目前还在测试期，启动密码是999999</span>



                            </div>
                        </div>

                    </div>
                </div>
                <div class="inner_part">
                    <div class="content content_3">
                        <div class="chars c3">
                            <div class="text1"><img class="imge" src="./tu/t2.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">特雷斯</span><br>
                                <span class="nr">NoZillian计划被全世界通缉的希文前工具人Tres本人，在曼国反希文议员暗中帮助下成为TheTres首领，意在借曼国力量破坏希文的制度</span>



                            </div>
                        </div>
                        <div class="chars c3">
                            <div class="text1"><img class="imge" src="./tu/ax.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">Axr</span><br>
                                <span class="nr">先天聋哑人，接受希文耳部Aillion模块后获得听力，加入希文Aillian警队，但不知为何自毁耳部模块背叛希文，加入了TheTres。</span>



                            </div>
                        </div>
                        <div class="chars c3">
                            <div class="text1"><img class="imge" src="./tu/问号.jpg"></div>
                            <div class="text2">
                                <span class="dbt">NAME:</span><span class="nm" style="font-weight: bolder;font-size: 15px">Expan</span><br>
                                <span class="nr">TheTres二把手，实际是曼国议员安插在特雷斯身边的眼线</span>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div id="bc">角色持续补充中……</div>
    </div>
</template>

<script>
    export default {
        name: "character"
    }
</script>

<style scoped>
    #bc{position: relative;margin-top: 700px;background: #bebebe;}
    .c1{border-left:4px solid #026189;border-right:32px solid #026189;}
    .c2{border-left:4px solid #ad3939;border-right:32px solid #ad3939;}
    .c3{border-left:4px solid #484848;border-right:32px solid #484848;}
    .imge{height: 75px;width: 75px;border-radius:50%;transform:skew(16deg);margin: 0 0 0 15px}
    .chars{transform:skew(-16deg);width: 390px;height: 86px;background: #eeeeee;padding-top: 10px;
        margin-top: 30px;
    }.text1{width: 30%;}
     .text1,.text2{float: left}
    .inner_part,.content,.slider,.card{background:#ffffff}
    .text1,.text2 ,.dbt,.nr,.nm{background:#eeeeee}
    .text2{text-align: left;transform:skew(12deg);width: 60%;line-height: 15px;padding-top: 10px}
    .dbt{font-family: 黑体;font-weight: bolder;font-size: 20px;color:#6d3535;margin-right: 2px}
    .nr, .nm{font-size: 11px}
#character{font-family: 'Open Sans', sans-serif;margin: auto;background:#bebebe;width: 800px;
    box-sizing: border-box;height: 1000px;z-index: -20;}
#hd{background: black;height: 190px;position: relative;border-right:10px solid rgba(23,35,135,0.97);
margin-top: 130px}
#no{float:right;font-size: 60px;background: #003a80;margin-right: 30px;
    padding-top:10px;height: 180px;width:150px;color: rgba(137,141,157,0.97)}
#bt{margin-top: 150px;margin-left:280px;float: left;color: aliceblue;background: black}

.card {position: absolute;
    height: 600px;
    width: 100%;
    max-width: 700px;
    margin: 40px 50px;
    border-radius: 10px;
    box-shadow: 0 10px 50px rgba(0,0,0,0.3);
}
    .card .inner_part {
        display: flex;
        margin-left: 30px;
        position: absolute;
        padding-top: 20px;
    }
    .content {padding: 0 10px 0 35px;width: 530px;margin-left: 50px;opacity: 0;transition: .8s;}
    #slideImg:checked ~ .inner_part .content {
        display: none;
    }
    #slide_1:checked ~ .inner_part .content_1{opacity: 1;margin-left: 0;z-index: 100;transition-delay: .3s;}
    #slide_2:checked ~ .inner_part .content_2{opacity: 1;margin-left: 0;z-index: 100;transition-delay: .3s;}
    #slide_3:checked ~ .inner_part .content_3 {opacity: 1;margin-left: 0;z-index: 100;transition-delay: .3s;}

    .slider {
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }

    #slideImg:checked ~ .slider {
        display: none;
    }
    .slider .slide {
        position: relative;height: 10px;width: 50px;background: #d9d9d9;
        border-radius: 5px;
        display: inline-flex;
        margin: 0 3px;
        cursor: pointer;
    }
    .slider .slide:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: -100%;
        background: #000000;;
        border-radius: 10px;
        transform: scaleX(0);
        transition: transform .6s;
        transform-origin: left;
    }

    #slide_1:checked ~ .slider .slide_1:before,
    #slide_2:checked ~ .slider .slide_2:before,
    #slide_3:checked ~ .slider .slide_3:before {
        transform: scaleX(1);
        width: 100%;
    }

    input {
        display: none;
    }
</style>