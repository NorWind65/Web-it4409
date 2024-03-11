// Ex1:

function palindrome(str) {
    str=str.toLowerCase();
    let res="";
    for(let a of str){
      if(a>='a'&&a<='z') res+=a;
      if(a>='0'&&a<='9') res+=a;
    }
    let tmp = res;
    let n = res.length;
    for(let i=0;i < n;i++){
      if(res[i] != tmp[n-i-1])return false;
    }
    return true;
  }
  
  palindrome("eye");
// Ex2:

function convertToRoman(num) {
    let res="";
    let n= num;
    while(n>=1000){
      n-=1000;
      res+="M";
    }
    while(n>=900){
      n-=900;
      res+="CM";
    }
    while(n>=500){
      n-=500;
      res+="D";
    }
    while(n>=400){
      n-=400;
      res+="CD";
    }
    while(n>=100){
      n-=100;
      res+="C";
    }
    while(n>=90){
      n-=90;
      res+="XC";
    }
    while(n>=50){
      n-=50;
      res+="L";
    }
    while(n>=40){
      n-=40;
      res+="XL";
    }
   while(n>=10){
      n-=10;
      res+="X";
    }
    while(n>=9){
      n-=9;
      res+="IX";
    }
    while(n>=5){
      n-=5;
      res+="V";
    }
    while(n>=4){
      n-=4;
      res+="IV";
    }
    while(n>=1){
      n-=1;
      res+="I";
    }
    return res;
    
   }
   
   convertToRoman(36);
// Ex3:
function rot13(str) {
    let res="";
    let n= str.length;
   for(let i=0;i<n;i++){
     let tmp= str.charCodeAt(i); 
 
     if(tmp>=65 && tmp<=90){
       let b=tmp+13;
       if(b > 90) b-=26;
       res+=String.fromCharCode(b);
     }
     else{
       res+=str.charAt(i);
     }
   }
   return res;
 }
 rot13("SERR PBQR PNZC");

 // Ex4:

 function telephoneCheck(str) {
    let ck=0;
    let res="";
    let dem=0;
    for(let i of str){
   
      if(i<'0'||i>'9'){
        if(i!='('&&i!=')'&&i!=' '&&i!='-') return false;
        
         if(i==')'){
           if (dem!=3) return false ;
         }
         if(i=='-')
         if(dem !=1 &&dem!=3 &&dem !=4 &&dem!=10) return false;
         dem=0;
    
      }
   
      else{dem++; res+=i;}
      if(i =='(') ck++;
      if(i ==')') ck--;
      if(ck<0)return false;
    }
   
    if(ck>0)return false; 
    if(res.length!=10)
       if(res.length==11){
           if(res[0]=='1') return true;
           else return false;
           }
       else return false;
     
    return true;
   }
   
   telephoneCheck("555-555-5555");
// Ex5:

function checkCashRegister(price, cash, cid) {
  let change= cash-price;
  let coin = new Array(); 
  let de=[0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let tien=0;
  for(let i =0;i<9;i++){
    coin.push(cid[i][1]/de[i]);
    tien+=cid[i][1];
  }

  let ares= new Array();
  for(let i= 8;i>=0;i--){
    let p=0;
    while( (p+1) <= coin[i]  && (p+1) * de[i] <= change ){
     
      p++;
     
    }
    change-=p*de[i];
    change=change.toFixed(2);

    if(p){
      let tmp=[cid[i][0], p*de[i] ];
      ares.push(tmp);
    }
  }
 
  let st="";
  if( change > 0 ){
    st="INSUFFICIENT_FUNDS";
    ares=[];
  }
  else{
    if(tien==cash-price) {st="CLOSED" ;ares=cid;}
    else st="OPEN";
  }
  const res ={
    status: st,
    change: ares
  }
    return res;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);