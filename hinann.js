const img = ["場面/s1.jpg","場面/s2.png","場面/s3.png","場面/s4.png","場面/s5.jpg","場面/s6.png","場面/s7.png","場面/s8.png","場面/s9.png","場面/s9-1.jpeg","場面/s10.png","場面/s10-1.png","場面/s11.png","場面/s11-1.jpeg","場面/s12.jpg","場面/s13.png","場面/s13-1.png","場面/s14.jpg"];

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
    a = 62000;  //(この後の)mp3の長さ＋2秒 +(効果音の長さ)+sub時間
     (new Audio("効果音/s2.mp3")).play();
     setTimeout('(new Audio("音声/s2.mp3")).play();', 5000);     
     
 }

 if(count==2){
   a = 7000;　//待機時間+1秒
    (new Audio("効果音/s3.mp3")).play();
   setTimeout('(new Audio("音声/s3.mp3")).play();', 16000);
   setTimeout('scrollTo(0, 880);', 25000);
 }

 if(count==3){
   a = 18000;
   setTimeout('(new Audio("音声/s4.mp3")).play();', 1000);
 } 
 
 if(count==4){
   a = 14000;
   (new Audio("効果音/s5.mp3")).play();
   setTimeout('(new Audio("音声/s5.mp3")).play();', 10000);
 } 

 if(count==5){
   a =10000;
   (new Audio("効果音/s6.mp3")).play();
   setTimeout('(new Audio("音声/s6.mp3")).play();', 6000);
 } 
 if(count==6){
  a = 13000;
  (new Audio("効果音/s7.mp3")).play();
  setTimeout('(new Audio("音声/s7.mp3")).play();', 2000);
 }

 if(count==7){
  a = 5000;
  (new Audio("効果音/s8.mp3")).play();
  setTimeout('(new Audio("音声/s8.mp3")).play();', 5000);
} 

if(count==8){
  a = 7000;
  (new Audio("効果音/s8.mp3")).play();
} 
if(count==9){
  a = 5000;
  (new Audio("音声/s9-1.mp3")).play();
} 
if(count==10){
  a = 6000;
  (new Audio("効果音/s8.mp3")).play();
} 
if(count==11){
  a = 5000;
  (new Audio("音声/s10-1.mp3")).play();
} 
if(count==12){
  a = 9000;
  (new Audio("効果音/s8.mp3")).play();
} 
if(count==13){
  a = 5000;
  (new Audio("音声/s11-1.mp3")).play();
} 

if(count==14){
  a = 5000;
  (new Audio("効果音/s8.mp3")).play();
} 
if(count==15){
  a = 7000;
  (new Audio("効果音/s8.mp3")).play();
} 

if(count==16){
   a = 13000;     //(この後の)mp3の長さ＋2秒+(効果音の長さ)+待機時間2秒
   (new Audio("音声/s13-1.mp3")).play();
 } 
 
 if(count==17){
  (new Audio("効果音/s14.mp3")).play();
  setTimeout('(new Audio("音声/s14.mp3")).play();', 5000);
 }
 
 if(count==img.length){
    location.href="index.html";
  }
 }

 const img2 =["場面/背景.png","場面/s4.png"];
 const img3 =["編集写真/背景.png","場面/q.png"];
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
    setTimeout('irasuto4.src = "場面/マル.png";',1000);
    setTimeout('irasuto5.src = "場面/バツ.png";',1000);
    setTimeout('scrollTo(1000, 0);', (b-2000));
  }
    //時間39秒


    
  }