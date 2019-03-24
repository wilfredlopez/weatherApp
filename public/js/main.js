//client side javascripts

//const url = 'http://puzzle.mead.io/puzzle'







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

                $(p1).text(data.weather[0].forecast)
                $(p2).text(data.weather[0].location)

                $(p1).append(p2)

                div.html(p1)
        
            })
        })
    })
})