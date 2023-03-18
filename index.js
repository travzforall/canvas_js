
var DT_variables = { 
    path: './mvc.js', 
};
 

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

 
      


        $(document).ready(function() {

            
            $.getScript( DT_variables.path, function(jd) { 
                const menu = document.getElementById( 'main_menu' )
                const main = document.querySelector('#main_window'); 
                const right_aside = main.querySelector('#right_aside');
                const left_aside =  document.querySelector( '#left_aside' )
                let main_page = main.querySelector('#main');
                const footer = document.getElementById('footer');


                wait5Secs();
                
                loadCss();

                loadData(menu.dataset.page).then((data) => {
                    main_page.appendChild(createTable(data));
                })

            

                setTimeout(() => {
                newButtonList(['First', 'Second', 'Third', 'First', 'Second', 'Third' ])
                


   
    
                console.log(menu)
                menu.classList.add('w-full', 'p-2', 'bg-green-500', 'text-center')
                // menu.innerHTML = "Main Menu"

             left_aside.classList.add('w-1/6', 'p-5', 'bg-red-500', 'text-center', 'h-full')
             left_aside.innerHTML = "Left Aside"
  
             main.classList.add('w-full', 'text-center', 'h-4/6', 'flex')


                main_page.classList.add('w-4/6', 'p-5', 'bg-blue-500', 'text-center', 'h-full')
                // main_page.appendChild(newTable())

                // main.innerHTML = "Main Menu"
                

                right_aside.classList.add('w-1/6', 'p-5', 'bg-orange-500', 'text-center', 'h-full')
                right_aside.innerHTML = "Right Aside"
 
                footer.classList.add('w-full', 'p-5', 'bg-yellow-500', 'text-center', 'h-1/6')
                footer.innerHTML = "Main footer"
 


                loadMenu(menu.dataset.page)

                console.log(data_checks())


            }, 100)


             }); 


             
			
            
    
            // console.log(menu, left_aside, main, right_aside, footer)


   
         
                    
        
               
         
               
				
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
 
    function loadMenu(page) {
        

        const menu = [
            {
                name: 'Start',
                url: '/ged-start.html',
                children: []
            },
            {
                name: 'Home',
                url: '/index.html',
                children: []
            },
            {
                name: 'Resources',
                url: '/resources.html',
                children: [
                    {
                        name: 'All',
                        url: '/resources.html',
                        children: []
                    },
                    {
                        name: 'Video',
                        url: '/resources.html',
                        children: []
                    },
                    {
                        name: 'Audio',
                        url: '/resources.html',
                        children: []
                    },
                    {
                        name: 'Pictures',
                        url: '/resources.html',
                        children: []
                    },
                    {
                        name: 'Text',
                        url: '/resources.html',
                        children: []
                    }
                ]
            },
            {
                name: 'Timeline',
                url: '/timeline.html',
                children: [
                    {
                        name: 'Skills',
                        url: '/resources.html',
                        children: [
                            {
                                name: 'New',
                                url: '/resources.html'
                            },
                            {
                                name: 'Complete',
                                url: '/resources.html'
                            }
                        ]
                    },
                    {
                        name: 'Assignments',
                        url: '/resources.html',
                        children: [
                            {
                                name: 'New',
                                url: '/resources.html'
                            },
                            {
                                name: 'Complete',
                                url: '/resources.html'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Keywords',
                url: '/keywords.html#/keywords',
                children: [
                    {
                        name: 'New',
                        url: '/resources.html'
                    },
                    {
                        name: 'Complete',
                        url: '/resources.html'
                    }
                ]
            },
            {
                name: 'Questions',
                url: '/questions.html',
                children: [
                    {
                        name: 'Builder',
                        url: '/resources.html'
                    },
                    {
                        name: 'Practice',
                        url: '/resources.html'
                    }
                ]
            },
            {
                name: 'My Stats',
                url: '/stats.html',
            }
        ]


        let buttons = [];


        menu.forEach(button => {
            console.log(button)
            var btn = document.createElement('a');
            btn.classList.add('btn', button.name != page? 'btn-primary': 'btn-secondary') 

            btn.href = button.url
            btn.innerHTML = button.name; 
            buttons.push(btn)
            document.getElementById('level_one').appendChild(btn)
        })
        
menu.filter(e => e.name == page)[0].children.forEach(child => {
    console.log()
    var btn = document.createElement('a');
    btn.classList.add('btn', 'btn-secondary') 
    btn.href = child.url
    btn.innerHTML = child.name; 
    buttons.push(btn)
    document.getElementById('level_two').appendChild(btn)

        })


        
    }

 



 



 


 



 



 


 

 





 

 




 



 



 
