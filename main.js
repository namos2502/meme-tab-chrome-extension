document.addEventListener('DOMContentLoaded', _ => {

    const body = document.querySelector('body');
    const images = ["https://media.tenor.com/LYh0elQNmZMAAAAC/funny-memes-memes-2023.gif",
    "https://i.pinimg.com/originals/6f/0a/16/6f0a16aa1b1310912e82f2d605d5601c.gif", 
    "https://media.tenor.com/eoFYXTxxC00AAAAd/nap-having-a-rest.gif",
    "https://media.tenor.com/rkOR9l-Gj0UAAAAd/jack-nicholson-creepy-smile.gif",
    "https://media3.giphy.com/media/OLXcRtL8DKwKDg66XU/giphy.gif",
    "https://remote-tools-images.s3.amazonaws.com/work-from-home-memes/image5.jpg",
    "https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/states-of-a-programmer.png",
    "https://ih1.redbubble.net/image.1943002440.4467/pp,840x830-pad,1000x1000,f8f8f8.u2.jpg",
    "https://miro.medium.com/v2/resize:fit:1128/format:webp/1*oQQPLWDecYDHlgBuAYKJHg.jpeg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2023/06/CnB8vM6NVEK-png__700.jpg"
  ];

    let prevImgIndex = 0;
  
    [...document.getElementsByClassName('randImg')].forEach(e => {
      const randImageIndex = ~~(Math.random() * images.length);
      if(randImageIndex !== prevImgIndex) {
        e.src = images[randImageIndex];
        prevImgIndex = randImageIndex;
      }
    }); 

    let button = document.createElement('button');
    button.className = 'button';
    button.innerText = 'Change Meme';
    body.append(button);

    button.addEventListener('click', (e) => {
        [...document.getElementsByClassName('randImg')].forEach(e => {
            const randImageIndex = ~~(Math.random() * images.length);
            if(randImageIndex !== prevImgIndex){
              e.src = images[randImageIndex];
              prevImgIndex = randImageIndex;
            }
          }); 
    });
  });

