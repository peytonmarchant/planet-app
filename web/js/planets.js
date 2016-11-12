(function($) {
 var app = $.sammy(function() {
   // each planet
   if(needsTemplates()) {
     this.use('Template');
   }

   this.get('#mercury', function() {
     updatePlanet('Mercury');
   });
   this.get('#venus', function() {
     updatePlanet('Venus');
   });
   this.get('#earth', function() {
     updatePlanet('Earth');
   });
   this.get('#mars', function() {
     updatePlanet('Mars');
   });
   this.get('#jupiter', function() {
     updatePlanet('Jupiter');
   });
   this.get('#saturn', function() {
     updatePlanet('Saturn');
   });
   this.get('#uranus', function() {
     updatePlanet('Uranus');
   });
   this.get('#neptune', function() {
     updatePlanet('Neptune');
   });
   this.get('#pluto', function() {
     updatePlanet('Pluto');
   });









 });
 $(function() {
   app.run()
 });
})(jQuery);
