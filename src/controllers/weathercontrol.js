const weather = require('./../utils/weather')
const geocode = require('./../utils/geocode')

module.exports = (req, res)=>{
    // req.query has access to the information passed. e.g /weather?name=wilfred&last_name=Lopez
    if(!req.query.address){
        return res.send({
            error: 'Please provide a valid address.'
        })
    }
                        //passed ={} just in case there is an error with the data and the destructuring doesnt work
    geocode.geocodeAddress(req.query.address, (error, {latitud,longitude,location} = {})=>{
        if(error){
            return res.send({
                error:'Adress Not Found',
                query: req.query.address
            })
        }
        
        weather.getWeather(latitud,longitude,(error,data)=>{
            if(error){
                return res.send({
                    error:'Coudnt Fetch Weather for current address',
                    query: req.query.address
                })
            }

            res.send({
                weather:[{
                    forecast: data.forecast,
                    temperture:data.temperature,
                    aparent_tempeture: data.apparent,
                    location: location,
                    query: req.query.address,
                    longitude,
                    latitude: latitud
                }]
            })
        })


    })//end geocodeaddress functions

}//end function for weather controller