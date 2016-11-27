(function($) {
 var app = $.sammy(function() {
   // each planet
   if(needsTemplates()) {
     this.use('Template');
   }

   this.get('#mercury', function(context) {
     updatePlanet('Mercury', context);
   });
   this.get('#venus', function(context) {
     updatePlanet('Venus', context);
   });
   this.get('#earth', function(context) {
     updatePlanet('Earth', context);
   });
   this.get('#mars', function(context) {
     updatePlanet('Mars', context);
   });
   this.get('#jupiter', function(context) {
     updatePlanet('Jupiter', context);
   });
   this.get('#saturn', function(context) {
     updatePlanet('Saturn', context);
   });
   this.get('#uranus', function(context) {
     updatePlanet('Uranus', context);
   });
   this.get('#neptune', function(context) {
     updatePlanet('Neptune', context);
   });
   this.get('#pluto', function(context) {
     updatePlanet('Pluto', context);
   });

 });
 $(function() {
   app.run()
 });
})(jQuery);
