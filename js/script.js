//use this to prank your friends at work
!(function(){
    //lets do it
    $('html, body').css({overflow: 'hidden'});
    const b = $('body');
    const audio = $("#RR");
    const top = $('<div class="top"></div>'),
        bot = $('<div class="bot"></div>'),
        rickroll = $('<div class="rickroll"><audio id="RR" playsinline autoplay><!-- ACC file (chrome/Safari/IE) --><source src="./rickrolled.m4a" type="audio/mpeg" /><!-- Ogg Vorbis (Firefox) --><source src="./rickrolled.ogg" type="audio/ogg" /><!-- Mp3 --><source src="./rickrolled.mp3" type="audio/mpeg"></audio><img class="img-rickroll" src="./img/rickrolled.gif" alt=""></div>');
    b.append(top.add(bot));

    b.one('click', function(e){
        e.preventDefault();
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen()
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        }
        setTimeout(function(){
            top.add(bot).animate({height: '50%'}, 300, function(){
                top.css({height: 100 + '%'})
                bot.animate({width: 0, left: 50 +'%'}, 400)
            });
        }, 2000);
        setTimeout(rickrollOn ,3000);
    });
    function rickrollOn() {
      b.append(rickroll);
      audio[0].play();


      // document.body.addEventListener('touchstart', function() {
      //   if(audiosWeWantToUnlock) {
      //    for(var audio of audiosWeWantToUnlock) {
      //     audio.play()
      //     audio.pause()
      //     audio.currentTime = 0
      //    }
      //    audiosWeWantToUnlock = null
      //  }
      //  }, false)
      //  //where earlier you did:
      //  var audiosWeWantToUnlock = []
      //  audiosWeWantToUnlock.push(new Audio('./rickrolled.mp3'))
      //  audiosWeWantToUnlock.push(new Audio('./nothing.wav'))
    }
}());
