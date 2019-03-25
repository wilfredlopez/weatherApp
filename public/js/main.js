//client side javascripts

$(document).ready(function(){
    $('#weather-form').on('submit',(e)=>{
        e.preventDefault(); 
        const address = $('#address').val()   
        const div = $('#results')
        let p1 = document.createElement( "p" )
        let p2 = document.createElement( "p" )

        const url = '/weather?address=' + address

        fetch(url).then((response)=>{
            response.json().then((data)=>{
                
                if(data.error){
                    $(p1).text(data.error)
                    $(p1).addClass('error');
                    
                    return div.html(p1)
                }

                $(p1).text(`${data.weather[0].forecast}. High: ${data.weather[0].temperatureHigh}, Low: ${data.weather[0].temperatureLow}`)
                $(p2).text(data.weather[0].location)
                
           
                $(p1).append(p2)

                div.html(p1)
        
            })
        })
    })
})//end doc. ready

//Nav Toggle



    $(window).on('load',function(){
        page=window.location.pathname.split("/").pop();
        console.log(page)

        menuChildren = $('a[href="/' + page + '"]');  
        $(menuChildren).parent('li').addClass('active');
    })



    // $('.nav-link').click(function(e){
    //     const links = $('.nav-link')
        
    //     $(this).parent('li').toggleClass('active')
    // })


//Nav Toggle