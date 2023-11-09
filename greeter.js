let name = 'Victor';
for(i=0; i<= 2; i++)
{
  if(i===0){
    console.log(`Good Morning ${name}`);
  }else if(i===1)
  {
    console.log(`Good Afternoon ${name}`);
  }else{
    console.log(`Good Evenning ${name}`);
  }
}
let age = 20;
let agging = age + 10;

console.log(`You are ${age} and in 10 years you will be ${agging}`);
for(i = age; age <= 100; i+10){
  console.log(`You are ${age} and in 10 years you will be ${i}`);
}
