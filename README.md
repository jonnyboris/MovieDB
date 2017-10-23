# Movie DB Coding Test



![Demo](https://i.gyazo.com/28d1cae33048bd1333f35c444ef53b95.gif)



## Get Started

The below expects a development environment (NPM, Node etc)

* Install dependancies - `npm i`
* Run Start Script - `npm start -s` - the application should build, run the tests and then run on port 3000, opening in your default browser 
* Problems? - [Bolierplate Docs](https://github.com/coryhouse/react-slingshot/blob/master/README.md) or call me on 07538075092



## Overview

This is based off the react slingshot boiler plate, all the npm scripts, babel config etc
are the defaults from the slingshot project. Everything in /src was written for the test.
(Apart from index.js (App entry point), Root.js, store/)

points to note:

* The whole application is wrapped in a configuration container that 
ensures that the [Movie DB config](https://developers.themoviedb.org/3/configuration/get-api-configuration)
is loaded before the application mounts. The movie DB config contains
image base URLs and sizes that all subsequent requests rely on. 

* Press the star icon on the results page or on the movie page to add to
favourites.

* I have put some effort into the layout, however given the expected time
frame I have not made it fully responsive. Its best view on a PC. 
(Although it does scale down some what)

