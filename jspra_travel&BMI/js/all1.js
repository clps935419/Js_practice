
var people=[] || JSON.parse(localStorage.getItem('people'));
var but=document.querySelector('.but');
var list=document.querySelector('.list');

// listLi.textContent='123';
// // listLi.setAttribute('class','addRed');

function bmi(e){
    e.preventDefault();
    var tall=parseInt(document.getElementById('tall').value);
    var wei=parseInt(document.getElementById('wei').value);
    var bmi=wei/Math.pow(tall*0.01,2);
    alert(bmi.toFixed(1));
    var man={
        ta:tall,
        we:wei,
        bm:bmi.toFixed(1),
        result:function(){
            if(man.bm<=18.5){
               
                return '過輕'
            }else if(man.bm>18.5 && man.bm<=24.9){
                
                return '健康'
            }else if(man.bm>25 && man.bm<29.9){
                
                return '稍胖'
            }else if(man.bm>=30){
                
                return '肥胖'
            }
        }
    }
    people.push(man);
    var peoStr=JSON.stringify(people);
    localStorage.setItem('people',peoStr);
    add(people);
    
    
}
function add(people){
    var text="";
    var now=new Date();
    for(var i=0;i<people.length;i++){
        var content='<li class='+color(people[i])+'>'+'&nbsp;&nbsp;'+people[i].result()+'<span style="margin-right:5px;margin-left:80px;font-size:14px; ">BMI</span>'+people[i].bm+'<span style="margin-right:5px;margin-left:80px;font-size:14px; ">身高</span>'+people[i].ta+'<span style="margin-right:5px;margin-left:80px;font-size:14px; ">體重</span>'+people[i].we+'<span style="margin-right:5px;margin-left:80px;font-size:14px; ">'+now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()+'</span></li>'
        text+=content;  
        
    }
    list.innerHTML=text;
   
  
 
}

function color(people){
        if(people.bm<=18.5){
            return 'addBlue'
                            
            }else if(people.bm>18.5 && people.bm<=24.9){
                return  'addGreen'
                            
            }else if(people.bm>25 && people.bm<29.9){
                return  'addOrange'
                            
            }else if(people.bm>=30){
                return  'addRed'          
            }
    }
    

but.addEventListener('click',bmi,false);
