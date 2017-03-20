(function() {

  const View = Mn.View.extend({
    template: '#template-layout'
  });

  const Controller = {
    moveToMain:function(){
      console.log('moveTomain');
    },
    moveToWork:function(){
      console.log('moveTomain');
    },
    moveToAbout:function(){
      console.log('moveTomain');
    },
    moveToStudy:function(){
      console.log('moveTomain');
    }
  }

  const Router = Mn.AppRouter.extend({
    controller:Controller,
    addRoutes:{
      'main':'moveToMain',
      'work':'moveToWork',
      'about':'moveToAbout',
      'study':'moveToStudy'
    },
    onRoute:function(name, path, args){
      console.log('naviaged to '+path);
    }
  });

  const App = Mn.Application.extend({
    region: '#app',

    onStart() {
      this.showView(new View());
    }
  });

  const app = new App();

  app.start();

})();
