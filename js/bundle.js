
function initAcrodeon() {

    let accItem = document.querySelectorAll('.faq-item');

    console.log(accItem)

   accItem.forEach((e)=>{
       e.addEventListener('click', function(){
           accItem.forEach((k)=>{
               k.classList.remove('active');
           })
           e.classList.toggle('active');
       })
   })
}

initAcrodeon()


function initVideo(){
    let video = document.querySelectorAll('.js-video');

    for (let i = 0; i<video.length; i++) {
        video[i].addEventListener('click', function(){
            console.log(this)
            this.classList.add('show')
        })
    }
}

initVideo()