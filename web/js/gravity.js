(function(){

  function main(){
    var world = {};
    start(world);
  }

  function start(w){
    var container = document.getElementById('container'); // not a canv, a div.
    var options = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false
    };

    // create engine
    w.engine = Matter.Engine.create(container, options);
    w.engine.enableSleeping = false;
    w.engine.world.gravity.y = .6;
    w.engine.world.gravity.scale = .0001;
//    w.engine.world.gravity.x = 0;
  //  w.engine.world.gravity.y = 0;
  //  w.engine.world.gravity.isPoint = true;

    // make walls
    var offset = 5;
    Matter.World.add(w.engine.world,[
      Matter.Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Matter.Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Matter.Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
      Matter.Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true })
    ]);

    //MouseConstraint = Matter.MouseConstraint;
    // var mouseConstraint = MouseConstraint.create(w.engine);
    //Matter.World.add(w.engine.world, mouseConstraint);

    var renderOptions = w.engine.render.options;
    setRenderOptions(renderOptions);

    Matter.Engine.run(w.engine);

    // create circle
    var rect = Matter.Bodies.rectangle(
      400, 10, 40, 40,
      { restitution:1} // options, max sides
    );
    console.log(rect);
    Matter.World.add(w.engine.world, rect);
  }

  function setRenderOptions(renderOptions){
    renderOptions.wireframes = false;
    renderOptions.showDebug = true;
    renderOptions.showBroadphase = false;
    renderOptions.showVelocity = true;
    renderOptions.showPositions = true;
    renderOptions.background = '#fff';
  }

  window.addEventListener('load', main);

})();
