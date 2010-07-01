RatPack.js
===

### What is RatPack.js?

RatPack is a Rails-like MVC framework built on top of Sammy.js and LAB.js. 

If you want to build a fast client-side javascript app that lets you easily separate functionality across files, RatPack is for you.

### Quickstart

    git clone git://github.com/dguttman/ratpack.js.git
    cd ratpack.js/lib
    python -m SimpleHTTPServer
  
Now that RatPack is up and running make it fit your needs.

* By default your root path ("#/") will redirect to the "index" action of the "main" controller ("#/main"). Change this in "/js/controllers/application_controller.js". This is also where you change your default selector:

        //
        // "/js/controllers/application_controller.js"
        //

        var application_controller = function(app) {
          
          // change your default selector here:
          this.element_selector = '#main';    

          this.get("#/", function(context) {
            // this defines your root action, 
            // by default we will just redirect
            this.redirect("#/main");
          });

        };

* You can edit the logic in "/js/controllers/main_controller.js" and the template in "/js/views/main/index.haml".

* Add more actions to the "main" controller by editing "/js/controllers/main_controller.js" and adding corresponding template files to "/js/views/main/"

        //
        // "/js/controllers/main_controller.js"
        //

        var main_controller = function(app) {

          this.get("#/main", function(context) {
            // index logic here...
          });
      
          // Define a new action like so...
          this.get("#/main/my_new_awesome_action", function(context) {
            this.variable_for_action = "awesome_string";
          });
        };
    
    ---

        //
        // "/js/views/main/my_new_awesome_action.haml"
        //
    
        %h1
          This is a really awesome new action
      
        %p
          And this is the haml template for it...
    
* Or, add more controllers by creating new controller files in "/js/controllers/" and listing them in "/js/app.js"

        //
        // "/js/controllers/new_awesome_controller.js"
        //
        
        var new_awesome_controller = function(app) {
          
          this.get("#/new_awesome_controller", function(context) {
            // this is logic for the index action...
          });
          
          this.get("#/new_awesome_controller/another_action", function(context) {
            // another action here...
          });
          
        };
        
    ---
    
        //
        // "/js/app.js"
        //
        
        (function($) {

          $(function() {
            var opts = {
              plugins: ["Haml", "JSON"],
              
              // now we add the new controller...
              controllers: ["application", "main", "new_awesome_controller"]
            };
            RatPack(opts).run();
          });

        })(jQuery);


### Credits

[Sammy.js](http://github.com/quirkey/sammy) - Aaron Quint and the Sammy.js team

[Lab.js](http://github.com/getify/LABjs) - Kyle Simpson

### Special Thanks

Ari Lerner and [Beehive](http://github.com/auser/beehive) - the birthplace of RatPack