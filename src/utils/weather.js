// creating function with 2 parameters, 2nd parameter is a callback function
//My API KEY
//7efa721f21c11dda3e3ea2d70b80f154
// https://darksky.net/dev/account

const request = require('request');
var weatherAPI = '7efa721f21c11dda3e3ea2d70b80f154';


https://api.darksky.net/forecast/7efa721f21c11dda3e3ea2d70b80f154/-71.0596,42.3605

var getWeather = (lat, lng, callback) =>{
request({
    url: `https://api.darksky.net/forecast/${weatherAPI}/${lat},${lng}`,
    json: true
}, (error, response, body) =>{
    //this changes if using google maps api
    if(!error && response.statusCode === 200){
        callback(undefined, {
            temperature: `${body.currently.temperature}`,
            apparent: `${body.currently.apparentTemperature}`,
            forecast:`${body.daily.data[0].summary} It is currently ${body.currently.apparentTemperature} degress.  there is a ${body.currently.precipProbability}% chance of rain`

        });
    }else{
        callback('There was an error');
    }
});
}

module.exports = {
    getWeather
}