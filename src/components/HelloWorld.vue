<template>
  <div class="hello">
    <div class="notice"> <div class="notice no">NOTICE</div><div class="notice wio">什么是OC世界观</div>
      <div class="jies">  ·OC即个人原创人物，OC世界观即多个处于同一时代背景下的OC所生活的世界的世界观<br>·构造个人oc世界观是原创画师、文章写手十分重要的一步；他们的创作、编剧灵感通常源于其中</div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{height:300px;width:500px;padding-top: 200px;padding-left: 100px;}
  .notice{height: 250px;float: left;color:white;}
  .jies{padding:50px 50px 20px 300px;border-right: 10px solid #002fdd;height: 130px;width: 300px;font-size: 13px;line-height:30px;color: aliceblue  }
  .no{font-size: 40px;font-family: "Adobe 黑体 Std R";margin-top: 60px;
    padding-top:20px;height: 60px;width:200px;background-color:#a00000; transform: rotate(90deg);color: rgba(137,141,157,0.97)}
  .wio{height:200px;background-color:#7b7b7c;
    width: 80px;writing-mode: vertical-lr;margin-left:-50px;
   padding-left: 50px;
  font-size: 20px;font-family: "Adobe 黑体 Std R";}


</style>
