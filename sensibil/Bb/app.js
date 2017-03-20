

(function() {



  const View = Mn.View.extend({
    template: '#template-intro'
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
