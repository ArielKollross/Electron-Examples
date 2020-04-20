const request = require('request');

const apiLink = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand'

const requestContenteFromApi = request(apiLink, (err, response, body) => {
    body = JSON.parse(body)
    let randomQuote = body[0].content.rendered

    document.getElementById('text').innerHTML = randomQuote
    console.log(randomQuote)
})

// function requestAPI() {
//     console.log('requiere API JSON')
// }
