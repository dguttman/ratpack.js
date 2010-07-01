var main_controller = function(app) {

  this.get("#/main", function(context) {
    this.current_controller = "Main";
    this.current_action = "Index";
    this.current_route = this.path;
    this.current_controller_file = "/js/controllers/main_controller.js"
    this.current_view_file = "/js/views/main/index.haml"
  });
  
};