
function checkSDT( ES){
    if(ES.length != 10) return false;
    for(let i=0;i<10;i++)
    if(ES[i]<'0'||ES[i]>'9')return false;
    return true
}

function checkEmail(ES){
    let ok =0;
    for(let i of ES){    
        if(i=='@'){
            if(ok==0)ok=1;
            else return false;
        }
        if(i=='.'){
            if(ok==1)return true;
        }
    }
    return false;
}

function check(){
    let ho = document.getElementById("HO").value;
 
    if(ho == ""){
        document.getElementById("anh1").style.display="block";
        document.getElementById("nof1").style.display="block";
    }
    else{
        document.getElementById("anh1").style.display="none";
        document.getElementById("nof1").style.display="none";
    }

    let ten = document.getElementById("TEN").value;
 
    if(ten == ""){
        document.getElementById("anh2").style.display="block";
        document.getElementById("nof2").style.display="block";
    }
    else{
        document.getElementById("anh2").style.display="none";
        document.getElementById("nof2").style.display="none";
    }

    let ES = document.getElementById("SDT").value;
   
    if(checkSDT(ES) || checkEmail(ES)){
        document.getElementById("anh3").style.display="none";
        document.getElementById("nof3").style.display="none";
    }
    else{
        document.getElementById("anh3").style.display="block";
        document.getElementById("nof3").style.display="block";
    }

    let Pass=  document.getElementById("PW").value;

    if(Pass.length<6){
        document.getElementById("anh4").style.display="block";
        document.getElementById("nof4").style.display="block";
    }
    else{
        document.getElementById("anh4").style.display="none";
        document.getElementById("nof4").style.display="none";
    }

    let dd=document.getElementById("DAY").value;
    let mm=document.getElementById("MONTH").value;
    let yy=document.getElementById("YEAR").value;

    if(dd==11 && mm==3 && 2024-yy<10){
        document.getElementById("anh5").style.display="block";
        document.getElementById("nof5").style.display="block";
    }
    else{
        document.getElementById("anh5").style.display="none";
        document.getElementById("nof5").style.display="none";
    }

    return ;
}