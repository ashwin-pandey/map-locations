# MapLocations

![image](https://github.com/ashwin-pandey/map-locations/blob/master/src/assets/images/screenshot.png?raw=true)

**This application requires the location permission.**

[Live Demo](https://map-locations.herokuapp.com/)

I have made some changes in order to deploy this on heroku. In order to run this application in local, following changes are required.

```json
File - package.json

Change
"start": "node server.js"

To
"start": "ng serve"
```

And run the application on local with command,

```json
ng serve
```

For Google Maps,
The api key that is added in the code is restricted to a particular domain, it cannot be used by everyone, please use your own google maps api key.
