//use this to prank your friends at work
!(function(){
    //lets do it
    $('html, body').css({overflow: 'hidden'});
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
    const b = $('body');
    const muteSound = new Howl({
      src: ['rickrolled.m4a'],
      mute: false,
      volume: 1
    });
    const muteSound2 = new Audio('./rickrolled.mp3');
    muteSound.mobileAutoEnable = false;
    const top = $('<div class="top"></div>'),
        bot = $('<div class="bot"></div>'),
        rickroll = $('<div class="rickroll"><img class="img-rickroll" src="./img/rickrolled.gif" alt=""></div>');
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
          if(iosPlatforms.indexOf(platform) !== -1){muteSound.play();}
          else{muteSound2.play();}
            top.add(bot).animate({height: '50%'}, 300, function(){
                top.css({height: 100 + '%'})
                bot.animate({width: 0, left: 50 +'%'}, 400)
            });
        }, 2000);
        setTimeout(rickrollOn ,3000);
    });
    function rickrollOn() {
      b.append(rickroll);

      // $("#autoPlayMusic")[0].play();

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
      //  audiosWeWantToUnlock.push(new Audio('./rickrolled.m4a'))
      //  audiosWeWantToUnlock.push(new Audio('./nothing.wav'))
       
    }
}());
