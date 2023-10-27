const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

const navAnime = ()=>{
scroll.on("scroll", (args) => {
  const scrollThreshold = 15;

  if (args.scroll.y > scrollThreshold) {
    gsap.to(".logo", {
      transform: "translateY(-100%)",
    });
    gsap.to(".menu-list", {
      transform: "translateY(-100%)",
      opacity: 0,
    });
  } else {
    gsap.to(".logo", {
      transform: "translateY(0%)",
    });

    gsap.to(".menu-list", {
      transform: "translateY(0%)",
      opacity: 1,
    });
  }
});
}

const megaMenu = ()=>{
  const open = document.getElementById('hamburger');
  open.addEventListener('click',()=>{
   let a = open.classList.contains('bi-list')
    if(a){
      open.classList.remove('bi-list')
    open.classList.add('bi-x-lg')
    gsap.to('.mega-menu',{
      display: 'flex',
      height: '100vh',
    })
    gsap.to(".logo", {
      transform: "translateY(-100%)",
      filter: 'invert(100%)',
    });
    function showMenuItems() {
      const menuItems = document.querySelectorAll('.menu-item a');
      menuItems.forEach((item, index) => {
      item.style.opacity = '0';
          setTimeout(() => {
              item.style.opacity = '1';
          }, 400 * index); 
      });
  }
  showMenuItems()
  gsap.to(".menu-list", {
    transform: "translateY(-100%)",
    opacity: 0,
  });
}
else{
  open.classList.remove('bi-x-lg');
  open.classList.add('bi-list');
  gsap.to('.mega-menu',{
    display: 'none',
    height: '0vh',
  })
  gsap.to(".logo", {
    transform: "translateY(0%)",
    filter: 'invert(0%)',

  });
  gsap.to(".menu-list", {
    transform: "translateY(0%)",
    opacity: 1,
  });
}
})

}


const playbtnAnimation = () => {
  const video = document.querySelector(".video-container");
  const play = document.querySelector(".play");

  video.addEventListener("mouseenter", () => {
    gsap.to(play, {
      transform: "translate(-50%, -50%) scale(1)",
      // scale: 1,
      opacity: 1,
    });
  });

  video.addEventListener("mousemove", (a) => {
    gsap.to(play, {
      left: a.x - 30,
      top: a.y - 30,
    });
  });

  video.addEventListener("mouseleave", () => {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
    });
  });

  /*
video.addEventListener('mousemove',(x)=>{
    const mouseX = x.clientX;
    const mouseY = x.clientY;
    play.style.scale = "1";
    play.style.top = mouseY + 'px';
    play.style.left = mouseX + 'px';

    console.log(mouseY);
});

video.addEventListener('mouseout',()=>{
    play.style.scale = "0";
})
*/
};

const loadAnime = () => {
  gsap.from(".hed-1", {
    y: 100,
    opacity: 0,
    delay: 0.4,
    duration: 0.6,
    stagger: 1,
  });
  gsap.from(".hed-2", {
    y: 100,
    opacity: 0,
    delay: 0.8,
    duration: 0.8,
    stagger: 1,
  });

  gsap.from(".video-container", {
    y: 100,
    opacity: 0,
    delay: 1,
    duration: 0.8,
  });
};

const shopCursor = () => {
  const products = document.querySelectorAll(".product");
  const cursor = document.getElementById("cursor");
  document,
    addEventListener("mousemove", (move) => {
      gsap.to(cursor, {
        top: move.y,
        left: move.x,
      });
    });

  products.forEach((product) => {
    product.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        transform: "translate(-50%, -50%) scale(1)",
        // scale: 1,
        opacity: 0.6,
      });
    });
    product.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  });
};


const formFunc = ()=>{
  const btn = document.getElementById('btn-contact');
  const close =document.getElementById('close') ;
  const send = document.getElementById('send-btn')
  // console.log(btn);
  btn.addEventListener('click',()=>{
    gsap.to('.form-warpper',{
      scale: 1,
    })
  })

  close.addEventListener('click',()=>{
    gsap.to('.form-warpper',{
      scale: 0,
    })
  })

  let msg = document.getElementById('message');
  send.addEventListener('click',()=>{
    let val = msg.value;
    if(msg.value != ''){
    gsap.to('.thanks',{
      transform: 'translateY(0%)',
    })
  }
  else{
    alert('pleae write something to sent')
  }
  })
};


// invoking all code (functions)
navAnime()
megaMenu()
shopCursor();
playbtnAnimation();
loadAnime();
formFunc()