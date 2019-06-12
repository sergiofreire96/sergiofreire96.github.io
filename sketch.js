var vidas = 3;
var pontos = 0;
var dificuldade = 1;
var som = 0;
var tempo =  0;
var seg   = 0;
var tela = 0;
var telaf0 = 0;
var telaf1 = 0;
var telaf2 = 0; 
var x = 675;
var y = 250;
var xd= 0;
var yd= 0;
var xo = 0;
var yo = 250;
var xi = [];
var yi = [];
var estadoDisparo = false;
var velo = 0;
var fc = 0;
var contpp = 0;
var contpp1 = 0;
var fdt1 = 0;

function preload() {
  img1 = [loadImage('Idle (2).png'), loadImage('Jump (8).png'),loadImage('Jump (10).png')];
  img2 = [loadImage('01 (1).png'), loadImage('02 (1).png'), loadImage('03 (1).png'), loadImage('04 (1).png')];
  telaf0 = loadImage('shang-chi.jpg');
  som   =  loadSound('My Girl.mp3');
  telaf1 = loadImage('abbey road.jpg');
}
      
function setup() {
  createCanvas(700, 500);
  for(i=0;i<7;i++){
        xi[i] = -50;
        yi[i] = random(40,500);
    }
  image(img1[contpp],xi[i],yi[i],100,100)
  imageMode(CENTER);
  image(img2[contpp],x,y,100,100)
  imageMode(CENTER);
}


function draw() {
  fc++;
  if(!som.isPlaying() && !(tela==3)){
    som.loop()
  }
 
  if(tela==0 ){
  background(0)
  image(telaf0,350,250,700,500);
  textSize(80)
  textFont('fontItalic');
  fill(random(0,250),random(0,250),random(0,250))
  text("Shang-Chi",180,300)
  textFont('fontItalic');
  textSize(32)
  fill(random(0,250),random(0,250),random(0,250));
  text("Aperte o botão ENTER para iniciar o jogo",90,350)
  //tecla para começar o jogo.
  if(keyIsDown(ENTER)){
    tela = 1; 
  }
  }
  if(tela == 1){
  tempo++
  seg = 10 - Math.floor(tempo/60);
  background(0)
  textSize(45)
  fill(random(0,250),random(0,250),random(0,250));
  text("Contagem regresiva:",160,100);
  text( seg + " segundos", 250, 225);
  textSize(36)
  text("Utilize as setas para controlar o Shan-Chi",10,350)
  text("Utilize CTRL para jogar o poder nos inimigos",10,400)
  if(seg==0){
    tela =2
  }
  }
  //Fim de Jogo.
  if(tela == 3){
  background(0)
  textSize(60)
  textFont('fontItalic');
  fill(random(0,250),random(0,255),random(0,255))
  text("GAME OVER",200,250)
  textSize(32)
  fill(random(0,250),random(0,255),random(0,255))
  text("Aperte ESPAÇO para jogar novamente",120,300)
  for(i = 0; i < 7;i++){
    xi[i] = -50; 
  }
  //Voltar para tela 0.
  if(keyIsDown(32)){
    tela = 0
  }
  }
if(tela==2){
  background(255);
  image(telaf1,350,250,700,500)
  textSize(32);
  text('Vidas:' + vidas, 10, 30);
  text('Pontos:' + pontos, 250, 30);
  text('Nível:' + dificuldade, 500, 30);
  text(mouseX,10,70)
  text(mouseY,70,70)
  fill(70,70,70)
  image(img2[contpp],x,y,60,60);
  if(fc%10==0){
     contpp++; 
  }
  if(contpp>3){
   contpp = 0; 
  }
  imageMode(CENTER)
  for(var i=0; i < 7; i++){
    image(img1[contpp1],xi[i],yi[i],70,70);
    if(fc%10==0){
     contpp1++; 
  }
  if(contpp1>2){
   contpp1 = 0; 
  }
    imageMode(CENTER)
    if(i==0){
    
     xi[i] = xi[i] + 2.7+ velo
    }
    else{
     if(i==1){
       xi[i] = xi[i] + 2.6+ velo
     }
     else { 
       if(i==2){
       xi[i] = xi[i] + 2.5+ velo
     }
      if(i==3){
         xi[i] = xi[i] + 2.4+ velo
      }
       else{ 
        if(i==4){
         xi[i] = xi[i] + 2.3+ velo
        }
         else{
          if(i==5){
           xi[i] = xi[i] + 2.2+ velo
          }
           else{
            if(i==6){
             xi[i] = xi[i] + 2.1 + velo
            }
           }
         }
       }
     }
    }
    if(xi[i] > 700){
      xi[i] = -50;
      yi[i]= random(40,500)
    }
  }
    
  fill(255);
  fill(255,0,0)
  rect(-1,40, 700,1)
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
  }
 if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  if(x > 675){
    x = 675;
}
  if(x < 25){
    x = 25;
}
  if(y > 550){
  y = 70;
  }
  if(y < 70){
  y = 500;
  }
  if(keyIsDown(CONTROL) && estadoDisparo === false){
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
   if(estadoDisparo == true){
     ellipse(xd, yd, 10,10);
     xd = xd - 50;
     if ( xd < 0){
       estadoDisparo = false;
     }
  }
  for(i=0;i<7;i++){
     //ellipse(xi[i],yi[i],50,50) 
  if( dist(x,y,xi[i],yi[i]) < 50){
     x = 675;
     y = 250;
     xi[i] = -50; 
     vidas--;
    if(vidas==0){
       tela = 3 
       vidas = 3;
       pontos = 0;
       dificuldade = 1;
    }
  }
  if(dist(xi[i],yi[i],xd,yd) < 30){
     xd = x
     yd = y
     xi[i] = -50
     pontos++;
     estadoDisparo = false;
     if(pontos%100 ==0 && pontos!=0){
      dificuldade++; 
      velo = velo + 1;
     }
  }
}
}
}