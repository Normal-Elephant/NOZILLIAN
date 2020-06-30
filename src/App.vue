<template>
  <div id="app">
    <a href="#banner"><div class="cd" id="fanhui"><p style="transform: rotate(-45deg);margin-top: 20px;">返回顶部</p></div></a>
    <img id="banner" src="./assets/banner凑数.jpg">
    <header id="shoumul"><nav class="shoumul-1"><a  href="#setting"><div class="cd"><span style="text-decoration:none">设定介绍</span></div></a> </nav>
      <nav class="shoumul-1"><a  href="#character"><div class="cd"><span style="color: rgba(250,229,255,0.97)">人物小传</span></div></a> </nav>
      <nav class="shoumul-1"><a  href="#story"><div class="cd"><span>剧情梗概</span></div></a> </nav>
    </header>
    <HelloWorld></helloworld>
    <setting></setting>
    <character></character>

    <div id="story">
      <div id="hd3"><div id="no3">剧梗情概</div><span id="bt3">PLOT</span></div>
      <div id="cho">
          <div v-on:click="currentComponent='psw'" class="butto" >
              <div class="cd" style="margin: 0;border-bottom:none;border-left: none;background: rgba(0,25,51,0.5)">
                  <span style="color: rgba(250,229,255,0.97)">已知情报</span></div>
          </div>
          <div v-on:click="currentComponent='npsw'" class="butto">
              <div class="cd" style="margin: 0;border-bottom:none;border-right: none;border-left:none;background: rgba(51,0,0,0.5)">
                  <span style="color: rgba(250,229,255,0.97)">未知情报</span></div>
          </div>
        <keep-alive>  <component v-bind:is="currentComponent" ></component></keep-alive>
        </div>
     </div>
      <bottom></bottom>
  </div>
</template>

<script>
  import mainstory from "@/components/psw999999";
  import mainstorytrue from "@/components/mainstorie";
  import HelloWorld from './components/HelloWorld.vue'
  import story from "@/components/story";
  import setting from "@/components/setting";
  import character from "@/components/character";
  import bottom from "@/components/bottom";

export default {
  name: 'App',
  components: {
    HelloWorld,
    story,
    setting,
    character,
    bottom,
    'npsw':mainstory,
    'psw':mainstorytrue
  },
    data:function () {
      return{
        currentComponent:"psw"
      }

    }
}
</script>

<style>
  * {background:url("assets/背景.jpg")  no-repeat fixed;
    background-size:100% 100%;
  }

  #fanhui:hover{opacity: 35%}
  #fanhui{color:white;
    border-left:3px solid white;border-right:3px solid white;
    bottom: 70px;opacity: 70%;
    overflow: hidden;position: fixed;
    right: 50px;height: 80px;width: 100px;
    transform: rotate(45deg);
  }

  #banner{width: 100%;}
  #shoumul{padding-left:22%;
    float: left;
    height: 80px;
    width: 78%;
    background: #000000;
  }

  .shoumul-1{float: left;
    color: #27692b;
    height: 80px;
    width: 24%;

    }
  .cd {margin:2px 0px  50px 10px ;height: 45px;padding-top: 25px;text-decoration: none;
    color: rgba(255,255,255,1);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    position: relative;
    border: 3px solid rgba(255,255,255,0.2);
    border-top: none;
    overflow: hidden;

      display: block;
  }
  .cd::before, .cd::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    opacity: 1;
    -webkit-transform: translate(-105%,0);
    transform: translate(-105%,0);
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: rgba(255,255,255,1);
    background-color: rgba(255,255,255,0.25);
  }
  .cd::after{
    -webkit-transition-delay: 0.5s; /* Safari */
    transition-delay: 0.2s;
  }
  .cd:hover::before, .cd:hover::after{
    opacity: 0;
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }

#story{margin: auto;background: black;
 ;
  width: 800px;
  height: 800px;z-index: -20;}
  #bt3{margin: -40px  360px;float: right;color: aliceblue;background: black}
  #hd3{margin-top: 130px;background: black;height: 190px;position: relative;
    border-left:10px solid rgba(103,0,4,1);}
  #no3{font-size: 60px;background: rgba(103,0,4,1);margin-left: 30px;
    padding-top:10px;height: 180px;width:150px;color: rgba(137,141,157,0.97)}
  #cho{-webkit-box-align: center;margin:0
  }
  .butto{align-items: center;float: left;height: 75px;
       width:50%}
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
