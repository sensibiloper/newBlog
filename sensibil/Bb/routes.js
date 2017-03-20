(function(){
  const viewManager = {
    showView : function(view){
      if(this.currentView !== null && this.currentView.cid != view.cid){
        this.currentView.remove();
      }
      this.currentView = view;
      return view.render();
    }
  }

  const Router = Backbone.Router.extend({
    routes:{
      "":"showMainPage",
      "work":"showWorkPage",
      "about":"showAboutPage",
      "study":"showStudyPage"
    },
    showMainPage:function(){
      var mainView =
      console.log('showMainPage move');
    },
    showWorkPage:function(){
      console.log('showWorkPage move');
    },
    showAboutPage:function(){
      console.log('showAboutPage');
    },
    showStudyPage:function(){
      console.log("showStudyPage ");
    }
  });

  let blogRouter = new Router();
  Backbone.history.start();
})();
