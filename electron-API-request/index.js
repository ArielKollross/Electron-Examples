const request = require('request');

const apiLink = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand'

request(apiLink, (err, response, body) => {
    body = JSON.parse(body)
    let randomQuote = body[0].content.rendered

   document.getElementById('text').innerHTML = randomQuote
})

setInterval(function(){
    request(apiLink, (err, response, body) => {
        const randomJson = Math.floor((Math.random()*8)+1)
        body = JSON.parse(body)
        let randomQuote = body[randomJson].content.rendered
    
       document.getElementById('text').innerHTML = randomQuote
    })
}, 2000)

function requestAPI() {
    const showApi = document.getElementById('api')
    showApi.innerHTML = apiLink
}
