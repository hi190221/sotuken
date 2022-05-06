const img = ["編集写真/s0.jpg","編集写真/s1.jpg","編集写真/s2.jpg","編集写真/s3.jpg","編集写真/s4.jpg","編集写真/s5.jpg","編集写真/s6.jpg","編集写真/s7.jpg"];

let count = -1;
let a = 15000;

mainChange();

function  mainChange() {
  count++;
  irasuto.src = img[count];
  setTimeout("mainChange()",a);
 
  if(count==0){
     a = 8000;    //(この後の)mp3の長さ＋2秒 
    
     setTimeout('(new Audio("音声/s1.mp3")).play();', 1000);
  }

  if(count==1){
    a = 50000; //(この後の)mp3の長さ＋2秒 +sub時間
    setTimeout('(new Audio("音声/s2.mp3")).play();', 1000);
 }

 if(count==2){
   a = 6000;   
   setTimeout('(new Audio("音声/s3.mp3")).play();', 1000);
   setTimeout('scrollTo(0, 700);', 11000);
   
 }

 if(count==3){
   a = 8000;    //(この後の)mp3の長さ＋2秒 待機時間+2
   setTimeout('(new Audio("音声/s4.mp3")).play();', 2000); //待機時間+1
 } 
 
 if(count==4){
   a = 8000;
   setTimeout('(new Audio("音声/s5.mp3")).play();', 1000);
 } 

 if(count==5){
   a = 8000;
   setTimeout('(new Audio("音声/s6.mp3")).play();', 1000);
 } 

 if(count==6){
   a = 12000;   //(この後の)mp3の長さ＋2秒+待機時間2秒
   setTimeout('(new Audio("音声/s7.mp3")).play();', 1000);
 } 
 
 if(count==7){
  setTimeout('(new Audio("音声/s8.mp3")).play();', 1000);
 }
 
 if(count==img.length){
    location.href="index.html";
  }
 }



 const img2 =["編集写真/s0.jpg","編集写真/s3.jpg"];
 const img3 =["編集写真/s0.jpg","編集写真/q3.jpg"];
 let count2 = -1;
 let oncechange =0;
 let b = 34000;

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
    setTimeout('scrollTo(1000, 0);', b);
  }
    //時間39秒


    
  }