var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);
var sum =0;
for(var i=0;i<weight.length;i++){
  sum = sum + weight[i];
}
var average_weight = sum/weight.length;
console.log(average_weight);
}

function draw() 
{
  background(30);
}

 

