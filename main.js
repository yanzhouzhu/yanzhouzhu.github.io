function pone() {
    placeclick="school";
    $(".action").hide();
    $(".paction").hide();
    $("#action1").show();
    $("#action2").show();
    $("#action3").show();
    $("#action5").show();
    $("#action6").show();
    $("#action7").show();
 }
 function ptwo() {
    placeclick="canteen";
    $(".action").hide();
    $(".paction").hide();
    $("#action2").show();
    $("#action4").show();
    $("#action6").show();
 }
 function pthree() {
    placeclick="dormitory";
    $(".action").hide();
    $(".paction").hide();
    $("#action1").show();
    $("#action2").show();
    $("#action3").show();
    $("#action4").show();
    $("#action5").show();
    $("#action6").show();
    $("#action7").show();
 }
 function pfour() {
    placeclick="commissary";
    $(".action").hide();
    $(".paction").hide();
    $("#action5").show();
 }
 function aone() {
   toilet=toilet+5;
   water=water+5;
   hungry=hungry+1.5;
   mn=mn+9;
   actionclick="study";
   if(placeclick=="school"){
      $(".message").prepend("<div class='messages'>你在教室里内卷，复习了一些知识</div>");
      intelligence=intelligence+0.1
      setTimeout("classes()","700");
   }
   if(placeclick=="dormitory"){
      $("#paction1").show();
      $("#paction2").show();
      $("#paction3").show();
   }
 }
 function atwo() {
   $(".paction").hide();
   actionclick="play";
   if(placeclick=="school"){
      toilet=toilet+5;
      water=water+5;
      hungry=hungry+1.5;
      mn=mn+9;
      popularity=popularity+1.3;
      $(".message").prepend("<div class='messages'>你与同桌聊天，还与他玩了几局弹尺子，十分钟就这么悄然离去</div>");
      setTimeout("classes()","700");
   }
   if(placeclick=="dormitory"){
      toilet=toilet+5;
      water=water+5;
      hungry=hungry+3.5;
      mn=mn+15;
      popularity=popularity+0.7;
      stamina=stamina+0.3;
      $(".message").prepend("<div class='messages'>你躺在床上与室友聊天，多么闲适的一个中午</div>");
   }
   if(placeclick=="canteen"){
      popularity=popularity+0.5;
      $(".message").prepend("<div class='messages'>在吃饭时，你与同学们聊起了梗，差点把饭吐了出来</div>");
   }
 }
 function athree() {
   $(".paction").hide();
   actionclick="relax";
   if(placeclick=="school"){
      toilet=toilet+1.5;
      water=water+1.5;
      hungry=hungry+0.5;
      mn=mn+9;
      stamina=stamina+0.1;
      $(".message").prepend("<div class='messages'>你趴在桌子上小睡了一觉，上课精力ber棒</div>");
      setTimeout("classes()","700");
   }
   if(placeclick=="dormitory"){
      toilet=toilet+5;
      water=water+5;
      hungry=hungry+10.5;
      mn=mn+35;
      stamina=stamina+0.3;
      $(".message").prepend("<div class='messages'>你睡了一觉，留了一床口水，醒来时已然大扫除</div>");
   }
 }
 function afour() {
   toilet=toilet+5;
   water=water+5;
   mn=mn+35;
   $(".paction").hide();
   actionclick="eat";
   if(placeclick=="canteen"){
      $(".message").prepend("<div class='messages'>你如往常一般在食堂吃饭，大妈非常抠</div>");
      hungry=hungry-55;
      stamina=stamina+0.1;
   }
   if(placeclick=="dormitory"){
      $(".message").prepend("<div class='messages'>室友给了你几片薯片，还大方的给了你一包海苔，你在床上吃了起来</div>");
      hungry=hungry-15;
      stamina=stamina-0.1;
   }
}
function afive() {
   toilet=toilet+3;
   water=water+3;
   hungry=hungry+1.5;
   mn=mn+9;
   $(".paction").hide();
   actionclick="buy";
   $(".message").prepend("<div class='messages'>交易</div>");
}
function asix() {
   toilet=toilet+3;
   water=0;
   hungry=hungry+0.5;
   mn=mn+3;
   $(".paction").hide();
   actionclick="drink";
   $(".message").prepend("<div class='messages'>你去接了一大杯水，你大口大口地喝水，霎的感觉活力四射</div>");
   revision="<p> 补水："+String(water.toFixed(1))+"<p/>";
   $("#w").html(revision);
   if(placeclick=="school"){
      things=things+1;
      if (things==2){
         things=0;
         setTimeout("classes()","700");
      }
   }
}
function aseven() {
   toilet=0;
   water=water+3;
   hungry=hungry+1.5;
   mn=mn+5;
   $(".paction").hide();
   actionclick="shet";
   $(".message").prepend("<div class='messages'>你去了趟厕所，排泄了所有体内排泄物</div>");
   revision="<p>内急："+String(toilet.toFixed(1))+"%<p/>";
   $("#h").html(revision);
   if(placeclick=="school"){
      things=things+1;
      if (things==2){
         things=0;
         setTimeout("classes()","700");
      }
   }
}
function paone() {
   toilet=toilet+5;
   water=water+5;
   hungry=hungry+3.5;
   mn=mn+15;
   intelligence=intelligence+0.1;
   stamina=stamina-0.1;
   $(".message").prepend("<div class='messages'>你在床上内卷，但床垫太软了，内卷得不好，还把你的背搞疼了</div>");
}
function patwo() {
   toilet=toilet+5;
   water=water+5;
   hungry=hungry+3.5;
   mn=mn+15;
   intelligence=intelligence+0.3;
   stamina=stamina-0.1;
   $(".message").prepend("<div class='messages'>你在桌子内卷，但你必须时刻提防宿管的目光</div>");
}
function pathree() {
   toilet=toilet+5;
   water=water+5;
   hungry=hungry+3.5;
   mn=mn+15;
   intelligence=intelligence+0.3;
   stamina=stamina-0.3;
   $(".message").prepend("<div class='messages'>你在浴室内卷，但常年滴水的水龙头让你很难受</div>");
}
function clearHidden(){
	var bottom=$('.message').position().top+$('.message').outerHeight(true);
	$('.messages').each(function() {
		if($(this).position().top>=bottom-10){
			$(this).remove();
		}
   })
}
function classes(){
   kind=Math.floor(Math.random()*36);
   if (kind<8){
      kind=kindn[0];
   }
   if (kind>=8 && kind<16){
      kind=kindn[1];
   }
   if (kind>=16 && kind<24){
      kind=kindn[2];
   }   
   if (kind>=24 && kind<26){
      kind=kindn[3];
   }
   if (kind>=26 && kind<28){
      kind=kindn[4];
   }
   if (kind>=28 && kind<30){
      kind=kindn[5];
   }   
   if (kind>=30 && kind<32){
      kind=kindn[6];
   }
   if (kind==32){
      kind=kindn[7];
   }
   if (kind==33){
      kind=kindn[8];
   }
   if (kind==34){
      kind=kindn[9];
   }
   if (kind==35){
      kind=kindn[10];
   }
   mn=mn+35;
   toilet=toilet+15;
   water=water+15;
   hungry=hungry+10.5
   revision="<div class='messages'>课间一下子就过了，你上了一节"+kind+"</div>";
   $(".message").prepend(revision);
}
function TIME(){
   console.log("100")
   toilet=toilet+0.1;
   water=water+0.1;
   hungry=hungry+0.03
   MN=MN+1;
   clearHidden();
   $('.action').attr('disabled',false);
   if (toilet>=88){
      $('#action1').attr('disabled',true);
      $('#action2').attr('disabled',true);
      $('#action3').attr('disabled',true);
      $('#action4').attr('disabled',true);
      $('#action5').attr('disabled',true);
   }
   if (water>=88){
      $('#action1').attr('disabled',true);
      $('#action2').attr('disabled',true);
      $('#action3').attr('disabled',true);
      $('#action4').attr('disabled',true);
      $('#action5').attr('disabled',true);
   
   }
   if (MN>=10){
      MN=MN-10;
      mn=mn+1;
   }
   if (mn>=60){
      hour_=hour_+1;
      mn=mn-60;
   }
   if (hour_<=12){
      d="上午";
   }
   if (hour_>12){
      d="下午";
   }
   if (hour_==22){
      d="上午";
      hour_=7;
      fday=fday+1;
      lday=lday-1;
   }
   if (hour_==22 && mn==0 && MN==0){
      $(".message").prepend("<div class='messages'>你入睡了</div>");
      interval=5;
   }
   if (hour_==7 && mn==0 && MN==0){
      $(".message").prepend("<div class='messages'>你醒了</div>");
      interval=50;
   }
   if (fday%5==0){
      revision="<p>智力："+String(intelligence.toFixed(1))+"<p/>";
      $("#w").html(revision);
      revision="<p>体能："+String(stamina.toFixed(1))+"<p/>";
      $("#w").html(revision);
      revision="<p>人缘·："+String(popularity.toFixed(1))+"<p/>";
      $("#w").html(revision);
   }
   if (mn<10){
      t="0"+String(mn);
   }
   if (mn>=10){
      t=String(mn);
   }
   revision="<p>补水："+String(water.toFixed(1))+"%<p/>";
   $("#w").html(revision);
   revision="<p>内急："+String(toilet.toFixed(1))+"%<p/>";
   $("#h").html(revision);
   revision="<p>饥饿："+String(hungry.toFixed(2))+"%<p/>";
   $("#t").html(revision);
   revision="<p>"+d+'\xa0'+String(hour_.toFixed(0))+":"+t+"<p/>";
   $("#clock").html(revision);
   revision="<p>"+tern+'\xa0'+"已开学"+String(fday.toFixed(0))+"天"+'\xa0'+"距期末"+String(lday.toFixed(0))+"天"+"<p/>";
   $("#date").html(revision);
}
 var placeclick = null;
 var actionclick = null;
 var intelligence = 108.0;
 var stamina = 64.0;
 var popularity = 64.0;
 var water = 0.0;
 var toilet = 0.0;
 var hungry = 0.0;
 var revision;
 var things=0;
 var plan;
 var hour_=7;
 var MN=0;
 var mn=0;
 var t=null;
 var d="上午";
 var fday=0;
 var lday=100;
 var tern="初一上";
 var kind;
 var kindn=['语文','数学','英语','政治','历史','地理','生物','体育','音乐','美术','信息']
 var interval=100;
 var setTimeoutF;
 $(document).ready(function(){
   $(".action").hide();
   $(".paction").hide();
   setInterval(TIME,100);
})