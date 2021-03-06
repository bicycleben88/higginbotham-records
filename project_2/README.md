# Higginbotham Records

This is a Full Stack application to post your record collection. It's built with the Mongo(DB/ose), Express, React & Node (MERN) stack. It has two full CRUD features, a user account & a record profile. It is styled with Bootstrap, featuring a mobile-first design. Lastly, you can play the drums with your keyboard and I hope you think it's as cool as I do.

> ### Live Earl:
>
> https://higginbotham-records.herokuapp.com/

### [Video Tour](https://www.youtube.com/playlist?list=PLjYC3ZkfhqCqA8ZLeQ1uTdE46RM7rrxWS)

![Landing page to Higginbotham Records](https://i.imgur.com/pv01sLr.png)

## Technologies Used:

> - Node.js
> - React
> - Express
> - MongoDB
> - Mongoose
> - CSS Bootstrap
> - BCrypt

## Features & Functions

> - Models, Views, Controllers (MVC) pattern
>   - Models define the data of a piece of content (e.g. a record),
>   - ![record model](public/images/model.png)
>   - Controllers
>     - define the routes associated with particular model
>     - follow RESTful\* convention (i.e. HTTP verb + endpoint = specific piece of data)
>   - ![record controller](https://i.imgur.com/U56M5A5.png)
>   - Views
>     - are returned by a controller
>     - make up the front end of the user interface
>     - written in .jsx as React components
>   - ![record views](public/images/views.png)
> - Drum Kit
>   - import router & tell server to use it when it recieves a request from "https:...../drum"
>   - ![drum router in server.js](public/images/drum-server.png)
>   - define get route in controller to return drum.jsx from views folder
>   - Views
>     - use custom data-key attribute to associate a keyboard key with an audio file
>   - ![drum views](public/images/drum-views.png)
>   - import app.js in \<Layout> to make it avaiable to all components
>   - JavaScript Logic
>     - Grab DOM elements & add event listeners
>     - ![drum dom elements & event listeners](public/images/drum-dom.png)
>     - playAudio()
>       - grab the audio file associated with the keyboard key that triggered the event
>       - if there's an audio file, then play it from the beggining
>     - ![play audio function](public/images/play-audio.png)
>     - removeClass() removes css effect
>       - ![remove class function](public/images/remove-class.png)
> - Type Ahead Feature
>   - Create API end point to get list of album names & artists
>     - Tell server to use API router
>     - ![API server](https://i.imgur.com/p73CVzn.png)
>     - Create API controller
>       - Access Record model
>       - Use mongoose to find all Records & return JSON
>       - ![API controller](https://i.imgur.com/RBsNvwg.png)
>     - JavaScript
>       - Grab DOM elements & add event listeners
>     - ![type ahead dom elements](https://i.imgur.com/4NzwMdb.png)
>       - Make fetch request to API & get records
>     - ![api fetch request](https://i.imgur.com/KfoGSTS.png)
>       - findResults()
>         - create RegExp object from search term
>         - filter thru records to find matches
>     - ![findResults function](https://i.imgur.com/BxQtALj.png)
>       - displayResults()
>         - invoke findResults using user input
>         - only handle events triggered by the keyboard
>         - map thru array of matching albums & artists
>           - display nothing if search bar is empty
>           - create RegExp from user input
>           - add class to highlight user input
>           - create \<li> that links to show page of record
>         - add \<li> to the DOM
>     - ![displayResults function](https://i.imgur.com/9vaUUsR.png)

## Notes

> - RESTful - “Representational State Transfer”. It is a set of rules that developers follow when they create their API. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL
> - Regular Expression (Regex) - A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text replace operations.

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://higginbotham.fun/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
