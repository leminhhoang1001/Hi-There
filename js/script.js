//use this to prank your friends at work

!(function(){
    //lets do it
    $('html, body').css({overflow: 'hidden'});
    const b = $('body');
    const btn= $('btn');

    const top = $('<div class="top"></div>'),
        bot = $('<div class="bot"></div>'),
        rickroll = $('<div class="rickroll"><img class="img-rickroll" src="./img/rickrolled.gif" alt=""><img src="https://grabify.link/images/pixel.png" class="aaa"></div>');
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
            const audio = new Howl({
              src: ['./rickrolled.wav'],
              autoplay: true,
              html5: true
            });
            audio.play()
            audio.resume()
        }, 2000);
        setTimeout(rickrollOn ,3000);
    });
    function rickrollOn() {
      b.append(rickroll);
      document.body.addEventListener('touchstart', function() {
        if(audiosWeWantToUnlock) {
         for(var audio of audiosWeWantToUnlock) {
          audio.play()
          audio.pause()
          audio.currentTime = 0
         }
         audiosWeWantToUnlock = null
       }
       }, false)
       //where earlier you did:
       var audiosWeWantToUnlock = []
       audiosWeWantToUnlock.push(new Audio('./rickrolled.wav'))
       audiosWeWantToUnlock.push(new Audio('./nothing.wav'))
    };
}());