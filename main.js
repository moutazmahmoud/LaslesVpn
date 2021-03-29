
// slider

const nextbtn = document.querySelector('.right');
const prevbtn = document.querySelector('.left');
const actvDots = document.querySelector('.active-dots');
const Dot1 = document.querySelector('.dot1');
const Dot2 = document.querySelector('.dot2');
const Dot3 = document.querySelector('.dot3');
const Dot4 = document.querySelector('.dot4');
const Dot5 = document.querySelector('.dot5');
const arrRight = document.getElementById('Capa_2');
const arrLeft = document.getElementById('Capa_1');
const sliderRow = document.querySelector('.content');
let count = 0;
let dotcount = 0;
let pos = 1;


if(window.innerWidth > 1375){
    nextbtn.addEventListener('click', () =>{
        if(count > -900 ){
            dotcount+=25;
            count-=450;
            sliderRow.style.left =  count +'px';
            actvDots.style.transform = 'translateX(' + dotcount + 'px)';
            if(dotcount==25){
                Dot1.style.background='#DDE0E4';
                Dot4.style.background='#f53838';
                prevbtn.style.background ='#f53838';
                arrLeft.style.fill = '#fff';
                
            } else if(dotcount==50){
                Dot2.style.background='#DDE0E4';
                Dot5.style.background='#f53838';
                nextbtn.style.background ='#fff';
                arrRight.style.fill = '#f53838'
            }
        } 
    
    });

    prevbtn.addEventListener('click', () =>{
        if(count <0 ){
            dotcount-=25;
            count+=450;
            sliderRow.style.left =  count +'px';
            actvDots.style.transform = 'translateX(' + dotcount + 'px)';
            if(dotcount==25){
                Dot2.style.background='#f53838';
                Dot5.style.background='#DDE0E4';
                prevbtn.style.background ='#f53838';
                arrRight.style.fill = '#fff';
                nextbtn.style.background ='#f53838';
            } else if (dotcount==0){
                Dot4.style.background='#DDE0E4';
                Dot1.style.background='#f53838';
                prevbtn.style.background ='#fff';
                arrLeft.style.fill = '#f53838';
            }   
        }
    });
    
   
}
else{

    nextbtn.addEventListener('click', () =>{
        if(count > -64 ){
            dotcount+=1.562;
            count-=32;
            pos+=1;
            sliderRow.style.left =  count +'vw';
            actvDots.style.transform = 'translateX(' + dotcount + 'rem)';
            if( pos == 2){
                Dot1.style.background='#DDE0E4';
                Dot4.style.background='#f53838';
                prevbtn.style.background ='#f53838';
                arrLeft.style.fill = '#fff';
                
            } else if( pos==3 ){
                Dot2.style.background='#DDE0E4';
                Dot5.style.background='#f53838';
                nextbtn.style.background ='#fff';
                arrRight.style.fill = '#f53838'
            }
        } 
    
    });
    prevbtn.addEventListener('click', () =>{
        if(count <0 ){
            dotcount-=1.562;
            count+=32;
            pos-=1;
            sliderRow.style.left =  count +'vw';
            actvDots.style.transform = 'translateX(' + dotcount + 'rem)';
            if(pos ==2){
                Dot2.style.background='#f53838';
                Dot5.style.background='#DDE0E4';
                prevbtn.style.background ='#f53838';
                arrRight.style.fill = '#fff';
                nextbtn.style.background ='#f53838';
            } else if (pos ==1){
                Dot4.style.background='#DDE0E4';
                Dot1.style.background='#f53838';
                prevbtn.style.background ='#fff';
                arrLeft.style.fill = '#f53838';
            }   
        }
    });
}


// menu Button
const menu = document.querySelector('.menu');
const nav = document.querySelector('.head2');


menu.addEventListener('click', ()=> {
    nav.classList.toggle('show');
});
