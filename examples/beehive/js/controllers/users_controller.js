//------------------//
// Users Controller //
//------------------//

var users_controller = function(app) {
  
  this.get("#/users", function(context) {
    this.get_page("/users.json", "users");
    console.log(this.users);
  });
  
}