const NAV_BUTTON = document.querySelector('.hamburger');
const NAV = document.querySelector('nav');
const TESTIMONIES_CONTAINER = document.querySelector('.testimonies');
const SLIDER_CONTROL = Array.from(document.querySelectorAll('.pagination > span'));

NAV_BUTTON.addEventListener('click', openNav);

function openNav(){
    NAV_BUTTON.classList.toggle('open-nav')
    NAV.classList.toggle('open');
    document.body.classList.toggle('nav-fixed')
}

let testimoniesPosition = document.querySelector('.testimonies__content').getBoundingClientRect().width

SLIDER_CONTROL.forEach(
    (control, index)=>{
        control.addEventListener('click', ()=>{
            TESTIMONIES_CONTAINER.style.transform = `translateX(-${(testimoniesPosition * index) + (20 * index) }px)`;
            paginate(index)
        })
    }
)

let curr ;
function paginate(page, page2){
    SLIDER_CONTROL.forEach((item) => item.classList.remove('current'));

    if(page2 != undefined){
        SLIDER_CONTROL[page].classList.add('current');
        SLIDER_CONTROL[page2].classList.add('current');
    }else{
        SLIDER_CONTROL[page].classList.add('current');
    }
}
paginate(0);

if(TESTIMONIES_CONTAINER.getBoundingClientRect().width > 1535 ){
    paginate(0, 1);
}

let transform =(movement, time)=>{

    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
            resolve(movement())
            }, time)
        }
    )
}

function moveTranslate(){
    if(
        TESTIMONIES_CONTAINER.getBoundingClientRect().width > 1535
    ){
        (async ()=>{

            await(        
                transform(
                ()=>{
                    TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + 20}px)`;
                    paginate(1, 2) 
                }, 4000
            ))

            await(
                transform(
                    ()=>{
                        TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + 40}px)`;
                        paginate(2, 3)
                    }, 4000
                )
            )

            await(
                transform(
                    ()=>{
                        TESTIMONIES_CONTAINER.style.transform = `translateX(0px)`;
                        paginate(0, 1)
                    }, 4000
                )
            )

    })()
    }


    else{
        (async ()=>{
            await(        
                transform(
                    ()=>{
                        TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + 20}px)`;
                        paginate(1)
                    }, 4000
                )
            )

            await(
                transform(
                    ()=>{
                        TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + 40}px)`;
                        paginate(2)
                    }, 4000
                )
            )

            await(
                transform(
                    ()=>{
                        TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + testimoniesPosition + 60}px)`;
                        paginate(3)
                    }, 4000
                )
            )

            await(
                transform(
                    ()=>{
                        TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + testimoniesPosition + 60}px)`;
                        paginate(3)
                    }, 4000
                )
            )

            await(
                transform(
                    ()=>{
                        TESTIMONIES_CONTAINER.style.transform = `translateX(0px)`;
                        paginate(0)
                    }, 4000
                )
            )

    })()
    }

}

setTimeout(() => {
    moveTranslate();

    setInterval(() => {
        moveTranslate()
    }, 16000);
}, 3000);