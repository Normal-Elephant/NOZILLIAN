<template>
    <div id="bottom"><ul><div class="di bt">THIS IS BOTTOM</div>

        <div class="di text"  ><li>本网站除部分交互有模板参考外，素材、设计排版、搭建均由一人完成,
            不存在版权纠纷等问题。</li><li>设定与现实无关，剧情纯属虚构。</li>
        </div></ul> </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
    *{background: black;}
#bottom{color: rgba(152,78,78,0.3);
    height: 200px;
    margin-top: 130px;padding: 0 20%;
}
    .di{float: left;}
.bt{font-size: 80px;padding-top: 10px;width:50%;}

.text{text-align: left;font-family: Arial;
    font-size: 12px;padding-top: 50px;color:rgba(255,255,255,0.5);
    width: 35%;line-height: 25px;
}

</style>