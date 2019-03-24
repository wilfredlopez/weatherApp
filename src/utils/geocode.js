const request = require('request');

const geocodeAddress = (address, callback) =>{

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoid2lsZnJlZGRvbmFsZGxvIiwiYSI6ImNqdG5jMG9rYzBxa240OWxiYnlqeHV6c3MifQ.npXZceA5gITcbUjGXq1_Cw&limit=1`

    request({url:url, json:true},(error, response)=>{
        if(error){
            callback('UNABLE TO CONNECT TO LOCATION SERVICES')
        }else if(response.body.features.length === 0){
            callback('UNABLE TO FIND LOCATION, TRY ANOTHER SEARCH')

        }else {
            const latitud = response.body.features[0].center[0]
            const longitude = response.body.features[0].center[1]
            const location = response.body.features[0].place_name
            callback(undefined,{latitud,longitude,location})
        }


    })
}//end function

module.exports = {geocodeAddress};




