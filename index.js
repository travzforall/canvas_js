
var DT_variables = { 
    path: 'https://cdn.statically.io/gh/travzforall/canvas_js/nb2/mvc.js', 
};
 

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

 

    // This runs code that looks at each page and determines what controls to create
    // $.getScript(DT_variables.path , function (data, textStatus, jqxhr ) {
    //     console.log( textStatus, jqxhr, 'master_controls.js loaded');
    // });
    
    // $.getScript( DT_variables.path)
    //     .done(function( script, textStatus ) {
    //         console.log( script );
    //     })
    //     .fail(function( jqxhr, settings, exception ) {
    //         $( "div.log" ).text( "Triggered ajaxError handler." );
    //     });


        $(document).ready(function() {
			
         
               $.getScript( DT_variables.path, function(jd) {
                  // Call custom function defined in script
                  loadCss();
                  newButtonList(['First', 'Second', 'Third'])
               }); 
				
         });
 

    // function loadScript( url, callback ) {
    //     var script = document.createElement( "script" )
    //     script.type = "text/javascript";
    //     if(script.readyState) {  // only required for IE <9
    //       script.onreadystatechange = function() {
    //         if ( script.readyState === "loaded" || script.readyState === "complete" ) {
    //           script.onreadystatechange = null;
    //           callback();
    //         }
    //       };
    //     } else {  //Others
    //       script.onload = function() {
    //         callback();
    //       };
    //     }
      
    //     script.src = url;
    //     document.getElementsByTagName( "head" )[0].appendChild( script );
    //   }
      
      
      // call the function...
    //   loadScript(DT_variables.path, function(data) {
    //     console.log(loadCSS()); 
    //   });
 

 



 



 


 



 



 


 

 





 

 




 



 



 
