exports.seed = function(knex) {
    return knex('contracts').del()
        .then(() => {
            return knex('contracts').insert([
                
                    {
                      "Target Name": "Butch Coolidge",
                      "Target Location": "Los Angeles",
                      "Target Photo": "https://goo.gl/LCquZj",
                      "Target Security": 3,
                      "Client Name": "Marcellus Wallace",
                      "Budget": 40
                    },
                    {
                      "Target Name": "The Jaguar",
                      "Target Location": "Russian Embassy",
                      "Target Photo": "https://goo.gl/6JWsiv",
                      "Target Security": 9,
                      "Client Name": "Concerto",
                      "Budget": 70
                    },
                    {
                      "Target Name": "Norman Stansfield",
                      "Target Location": "Manhattan",
                      "Target Photo": "https://i.imgur.com/mdIk33E.jpg",
                      "Target Security": 7,
                      "Client Name": "Mathilda",
                      "Budget": 35
                    },
                    {
                      "Target Name": "Santino D'Antonio",
                      "Target Location": "Continental Hotel",
                      "Target Photo": "https://goo.gl/fUPkYy",
                      "Target Security": 10,
                      "Client Name": "Winston",
                      "Budget": 25
                    },
                    {
                      "Target Name": "Sonny Valerio",
                      "Target Location": "Queens",
                      "Target Photo": "https://goo.gl/8DHYUS",
                      "Target Security": 4,
                      "Client Name": "Ray Vargo",
                      "Budget": 10
                    }
            ])
        })
}