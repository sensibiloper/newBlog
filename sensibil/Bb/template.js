var template = '<script id="template-layout" type="x-template/underscore">'+
                '<div id="content">'+
                '<h1>&nbsp;</h1>'+
                '<h2>Welcome!</h2>'+
                '<ul>'+
                '<li><a href="http://marionettejs.com/">Marionette.js homepage</a></li>'+
                '</ul>'+
                '</div>'+
                '</script>';

    template += '<script id="template-intro" type="x-template/underscore">'+
                '<div id="template-intro">'+
                '<div id="ww">'+
                '<div class="container">'+
                '<div class="row">'+
                '<div class="col-lg-8 col-lg-offset-2 centered">'+
                '<h1><%- subject %></h1>'+
                '<p><%- text -%></p>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="container pt">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</script>';

document.write(template);
