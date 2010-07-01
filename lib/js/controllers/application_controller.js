var application_controller = function(app) {
  this.element_selector = '#main';    

  this.get("#/", function(context) {
    this.redirect("#/main");
  });

};