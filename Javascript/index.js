$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      var $nav1=$(".nav-text");
      $nav1.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  under = function(){
    if ($window.scrollTop() < thisPos) {
        $this.css({
            position: 'absolute',
            top: ""
        });
        setPosition = over;
    }
};

over = function(){
    if (!($window.scrollTop() < thisPos)){
        $this.css({
            position: 'fixed',
            top: 0
        });
        setPosition = under;
    }
};
