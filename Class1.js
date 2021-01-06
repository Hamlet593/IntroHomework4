Ռեկուրսիան եթե կանչենք, ինքը անվերջ կկանչվի, դրա համար պետք է գրենք միայն որ պայմանների դեպքում ինքը աշխատի թե չէ:

function Rekursia(n){
  if(n < 10){
    console.log(n);
    n++;
    Rekursia(n);
  }
}
Rekursia(1);

Նույնը array-ով՝

function Rekursia(arr,n){
  if(n < 10){
    arr.push(n);
    n++;
    Rekursia(arr,n);
  }
  return arr;
}
console.log(Rekursia([],1));