 
 
var my_variables = {
    dailyKeywords: [],
    dayNumber: 0,
    sprintNumber: 0,
    weekNumber: 0,
}


Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});




const checks = $.ajax({
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token BBNXYdXuHymPfGwpuBWasy5JaGavmynT');
    },
    type: "GET",
    url: "https://baserow.thejollytech.com/api/database/rows/table/692/1/?user_field_names=true",

    success: function (result) {


        if (result != "Error") {

            setTimeout(() => {

                let retObj = {}
                result.Objectives.forEach((e, i) => {
            
                    retObj[e.value] = {
                        id: e.value,
                        list: result.objective_list[i].value,
                        details: result.objective_list_detail_1[i].ids,
                        level: result.objective_level[i].value.value,
                    }
                })


                console.log(result)
                var bucket = document.getElementById('keyword-bucket')
                var ul = document.createElement('ul'); 
                ul.classList.add('list-disc', 'text-black' )

                Object.values(retObj).forEach(obj => {

                    var li = document.createElement('li'); 
                    li.classList.add(`ml-${(obj.level - 1)*12}`)

                    if(obj.level == 2){

                    }
                    li.innerHTML = obj.id + ': ' + obj.list
                    

                    ul.appendChild(li)

                    // var a = document.createElement('a'); 
                    // a.classList.add('btn', 'btn-primary', 'block', 'mb-3' )

                })

                bucket.appendChild(ul)

                // loadAndCreate(result);
          
        
            }, 1000)
        

        } else {
            console.log('Invalid username or password');
        }
    },
    error: function (req, status, error) {

        alert(error);
    }
});

 
// Run the necessary code when a page loads
$(document).ready(function () {
    'use strict';
    addCSS();  


    setTimeout(() => {
   
 
        createButton()
            console.log(76767676) 
 

 
            

    }, 10)   


});
 

function addCSS() {
    // Create new link Element
    var script = document.createElement('script');
    var link = document.createElement('link');

    link.href = "https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css";
    link.rel = "stylesheet"
    link.type = "text/css"
    script.src = 'https://cdn.tailwindcss.com/3.1.4';

    // Get HTML head element to append
    // script element to it
    document.getElementsByTagName('HEAD')[0].appendChild(link); 
    document.getElementsByTagName('HEAD')[0].appendChild(script); 
    console.log("CSS Added")
}

function createButton() {

    // const menu = [
    //     {
    //         name: 'Home',
    //         url: '/courses/1/pages/menu',
    //     },
    //     {
    //         name: 'Resources',
    //         url: '/courses/1/pages/resources',
    //     },
    //     {
    //         name: 'Timeline',
    //         url: '/courses/1/pages/timeline',
    //     },
    //     {
    //         name: 'Keywords',
    //         url: '/courses/1/pages/keywords',
    //     },
    //     {
    //         name: 'My Stats',
    //         url: '/courses/1/pages/stats',
    //     }
    // ]
 

    const menu = [
        {
            name: 'Start',
            url: '/ged-start.html',
        },
        {
            name: 'Home',
            url: '/index.html',
        },
        {
            name: 'Resources',
            url: '/resources.html',
        },
        {
            name: 'Timeline',
            url: '/timeline.html',
        },
        {
            name: 'Keywords',
            url: '/keywords.html',
        },
        {
            name: 'Questions',
            url: '/questions.html',
        },
        {
            name: 'My Stats',
            url: '/stats.html',
        }
    ]

    menu.forEach(button => {
        console.log(button)
        var btn = document.createElement('a');
        btn.classList.add('btn', 'btn-primary') 
        btn.href = button.url
        btn.innerHTML = button.name;
        let box = document.getElementById('menu-buttons');
        box.appendChild(btn); 
    })

    // Create new link Element
   
 

     
}
 