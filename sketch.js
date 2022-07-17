let r =[]
let b;
let check=[]
let divisions
let colSpeed=1

function setup() {
  createCanvas(500, 500);
  b=200;
  divisions = 100
  for(let i = 0; i<divisions;i++){
    r[i]=250/divisions*i
    check[i]=true
  }
  noStroke();
}

function draw() {
  background(220);
  b+=colSpeed
  if(b>255){
    colSpeed=-1;
  }
  if(b<100){
    colSpeed=1
  }
  for(let i=0;i<r.length;i++){
      fill(50,r[i],b)
      rect(i*(width/r.length),0,500/r.length,height)
    
    
    if(r[i]>250){
        check[i]=false
      }
    if(r[i]<0){
      check[i]=true
    }
    if(check[i]===true){
      r[i]+=250/r.length
    }
    if(check[i]===false){
      r[i]-=250/r.length
    }
  }
}