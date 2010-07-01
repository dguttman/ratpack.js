(function($) {

  $(function() {
    
    var opts = {
      plugins: ["Haml", "JSON"], 
      controllers: ["application", "main"]
    };
  
    RatPack(opts).run();
  });

})(jQuery);