const img = ["イラスト屋/s0.png","イラスト屋/s1.png","イラスト屋/s2.png","イラスト屋/s3.png","イラスト屋/s4.png","イラスト屋/s5.png","イラスト屋/s6.png","イラスト屋/s7.png"];

let count = -1;
let a = 15000;

mainChange();

function  mainChange() {
  count++;
  irasuto.src = img[count];
  setTimeout("mainChange()",a);
 
  if(count==0){
     a = 13000; //(この後の)mp3の長さ＋2秒 +(効果音の長さ)
     
     setTimeout('(new Audio("音声/s1.mp3")).play();',1000);
    
  }

  if(count==1){
    a = 60000;  //(この後の)mp3の長さ＋2秒 +(効果音の長さ)+sub時間
     (new Audio("効果音/s2.mp3")).play();
     setTimeout('(new Audio("音声/s2.mp3")).play();', 5000);     
     
 }

 if(count==2){
   a = 7000;　//待機時間+1秒
    (new Audio("効果音/s3.mp3")).play();
   setTimeout('(new Audio("音声/s3.mp3")).play();', 10000);
   setTimeout('scrollTo(0, 880);', 25000);
 }

 if(count==3){
   a = 18000;
   setTimeout('(new Audio("音声/s4.mp3")).play();', 1000);
 } 
 
 if(count==4){
   a = 13000;
   (new Audio("効果音/s5.mp3")).play();
   setTimeout('(new Audio("音声/s5.mp3")).play();', 10000);
 } 

 if(count==5){
   a = 17000;
   (new Audio("効果音/s6.mp3")).play();
   setTimeout('(new Audio("音声/s6.mp3")).play();', 5000);
 } 

 if(count==6){   
   a = 17000;     //(この後の)mp3の長さ＋2秒+(効果音の長さ)+待機時間2秒
   (new Audio("効果音/s7.mp3")).play();
    setTimeout('(new Audio("音声/s7.mp3")).play();', 5000);
 } 
 
 if(count==7){
  (new Audio("効果音/s8.mp3")).play();
  setTimeout('(new Audio("音声/s8.mp3")).play();', 5000);
 }
 
 if(count==img.length){
    location.href="index.html";
  }
 }

 const img2 =["イラスト屋/s0.png","イラスト屋/s3.png"];
 const img3 =["イラスト屋/s0.png","イラスト屋/q3.png"];
 let count2 = -1;
 let oncechange =0;
 let b = 53000;

 subChange();
 function  subChange() {
  irasuto2.src = img2[oncechange];
  irasuto3.src = img3[oncechange];
  count2++;
  setTimeout("subChange()",b);
  if(count2==0){
    oncechange=1;
    b=4000;  //(この後の)mp3の長さ
  }
  if(count2==1){
    (new Audio("音声/q1.mp3")).play();
    b=6000;
  }
  if(count2==2){
    (new Audio("音声/q3-1.mp3")).play();
    b=4000;
  }
  if(count2==3){
    (new Audio("音声/q3-2.mp3")).play();
    b=5000;
  }
  if(count2==4){
    setTimeout('(new Audio("音声/q2.mp3")).play();',1000);
    b=10000;
  }
  if(count2==5){
    (new Audio("効果音/q.mp3")).play();
    b=10000;   
  }
  if(count2==6){
    (new Audio("音声/q3-3.mp3")).play(); //(この後の)mp3の長さ+待機時間
    setTimeout('irasuto4.src = "イラスト屋/マル.png";',1000);
    setTimeout('irasuto5.src = "イラスト屋/バツ.png";',1000);
    setTimeout('scrollTo(1000, 0);', (b-2000));
  }
    //時間39秒


    
  }
    

 



