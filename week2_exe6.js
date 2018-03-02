console.log('LOPPING PERTAMA')
var a = 1;
while(a <=20)
{
  if(a % 2 ===0){
    console.log(a + ' - ' +'I love coding')
}
  a++
}
console.log('LOPPING KEDUA')
var b = 20;
while(b >=1)
{
  if (b % 2 ===0){
  console.log(b + ' - ' + 'I will become fullstack developer')
  
}
  b--  
}
---------------------------------------------------------------------------------------------------------

for(var a=0; a<1; a++){
  console.log('LOPPING PERTAMA')
  
  for(var deret=1; deret<20; deret++){
    
    console.log(deret + ' -' + ' I love coding');
  }
}

   console.log ('LOPPING KEDUA');
for(var deret = 20; deret>0; deret--){
  console.log(deret + ' -'+ ' I will become fullstack developer')
}

------------------------------------------------------------------------------------------------------------

for(var x =1; x<= 100; x++)
{
  if(x % 2===0){
    console.log(x + 'adalah angka genap');
  }else {
    console.log(x + 'adalah angka ganjil')
  }
}

console.log ('\n');

for(var a=1;  a<=100; a+=2)
{
  if(a % 3 ===0){
    console.log(a + 'kelipatan 3');
  }
}

console.log('\n');

for(var b=1; b<= 100; b+=5)
{
  if(b % 6 === 0){
    console.log(b + 'kelipatan 6');
  }
}

console.log ('\n');

for(var c=1; c<=100; c+=9)
{
  if(c % 10 === 0){
    console.log(c + 'kelipatan 10');
  }
}
