window.addEventListener('scroll', parallaxScroll);


function parallaxScroll(){
    const contentEl = document.querySelector('.content');
    const windowHeight = window.innerHeight;
    const finalPos = scrollY / (contentEl.offsetTop - windowHeight) * 60;

    
    finalPos < 100 ? mountainAnim(finalPos) : mountainAnim(100);
};

function mountainAnim(finalPos){
    const mount1 = document.querySelector('.mountain-1');
    const mount2 = document.querySelector('.mountain-2');
    const mount3 = document.querySelector('.mountain-3');
    const fog = document.querySelector('.fog');


    const mount2Translate = 20/ 100 * finalPos;
    const mount2Scale = 1 - 2/100* finalPos;        
    mount2.style.cssText = `
        transform: translate3d(${-mount2Translate}%, ${-mount2Translate}%, 0)
        scale(${mount2Scale}) 
    `;

    const mount3Translate = 20/ 100 * finalPos;
    const mount3Scale = 1 - 2/100 * finalPos ;           
    mount3.style.cssText = `
        transform: translate3d(${mount3Translate}%, ${-mount3Translate}%, 0)
        scale(${mount3Scale}) 
    `;


    const  fogScale = 1 - 2/100 * finalPos;
    const fogOpacity = 1 + 2/100 * finalPos;
    fog.style.cssText = `
        transform: scale(${fogScale});
        opacity: ${fogOpacity};
    `;


    const mount1Scale = 1 - 2/1000 * finalPos;
    mount1.style.cssText = `
    transform: scale(${mount1Scale});
    `;

};