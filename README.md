# About this project

## What is the IoT Registry?

 The IoT Registry offers transparency to citizens, visitors and entrepreneurs by providing an online registry of IoT devices. 
 [Learn more](https://northsearegion.eu/score/score-solutions/the-iot-registry/)

## What is SCORE?

This application is developed part of the SCORE project (Smart Cities + Open Data Re-use). SCORE aims to increase efficiency and quality of public services in cities through smart and open data-driven solutions. The SCORE partners develop innovative solutions based on open data. We focus on sharing insights and methodologies for developing better public services.
[Learn more](https://northsearegion.eu/score/) 

# React bootstrapping

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is based on a previous repository that was bootstrapped with [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate). We decided to change to a different bootstrapping platform for a multitude of reasons. With the main ones being webpack build size, security vulnerabilities and ease of updating.

# Customizing the application to your needs

## The .env file

### `REACT_APP_API_ROOT`

This env variable sets the link to a collection made using [APIAPI](https://github.com/lab9k/apiapi) that returns a list of json's in the format of the `Device` class found at `src/services/classes/Device.js` This tool takes different API sources and returns a customisable format.

### `REACT_APP_MAP_API_ROOT`

This env sets the path to the [geolocation suggestion API](https://loc.geopunt.be/Help/Api/GET-v4-Suggestion_q_c). This API take a free form search string. May contain community names, sub-community area names, zip codes, street names, house numbers or parts thereof. A minimum of two characters is required and returns a list of suggestions based on the provided string. This is used in the `src/services/api/Geocoder.js` service. This api get called by the `src/containers/Geocoder` component.

### `REACT_APP_ADDRESS_API_ROOT`

This env sets the path to the [geolocation location  API](https://loc.geopunt.be/Help/Api/GET-v4-Location_q_latlon_xy_type_c). This API takes a suggestion that the user entered and tries to find a location that matches it as good possible and then returns a location object that contains coordinates that the get used to move the viewport and place the searchmarker.

### `REACT_APP_MAP_ROOT`

This env sets the root adress of the map wmts API.

```
    <WMTSTileLayer
        url={process.env.REACT_APP_MAP_ROOT}
        layer="SG-E-Stadsplan:Stadsplan"
        tilematrixSet="SG-WEB MERCATOR"
        format="image/png"
    />
```

### `REACT_APP_CITY_FILTER=Gent`

This is a parameter that gets added to the end of the suggestion Search string to limit results to the current City the app is configured for. If it is not set the search will not filter based on the city.

### the rest are self explanatory, for the zoom levels refer to the [leaflet documentation](https://leafletjs.com/reference-1.6.0.html)

`REACT_APP_MAP_MAX_ZOOM=19`  
`REACT_APP_MAP_DEFAULT_ZOOM=14`  
`REACT_APP_MAP_CENTER_LATITUDE=51.0543`
`REACT_APP_MAP_CENTER_LONGITUDE=3.7174`

## The CSV files

> During development we found you often had data that wasn't hosted on an API but was only available in Excel sheets. So we added a feature that lets you add static csv files that will be loaded alongside the API sources.

### Structure of the csv file

Your CSV file can contain as many `headers` as you want. But only the following headers will be displayed by default. If a `header` is missing, its field won't be displayed in the marker card (see image below).

* title
* category
    * This will be the category on the left.
* type
    * This specifies the catergory displayed on the right. Both category and type are also used for the filtering in the `legend` component.
* dataprocessing
* retention
* datacontactorg
* link
* latitude
    * The application is smart enough to handle the conversion from excel to csv. For example if the latitude value gets changed to `"51,367,895"` it will automatically be converted to `51.367895`
* longitude

### Adding new csv files

Adding csv files is very easy, just add a new file that has the correct headers (not case sensitive) to the folder `src/csv`. The application automatically loads all files in this folder.

> An excerpt of the ANPR camera csv that is formatted correctly.

```
category,type,title,latitude,longitude,dataprocessing,retention,personaldata,contactorg,linklabel,link
Camera,Nummerplaatherkenning,Toegangscontrole autovrij gebied - Sint-Michielsplein,51.053752,3.718900,"In het kader van het circulatieplan controleren slimme camera’s de autonummerplaten. Dit in de autovrije gebieden en een aantal doorgangsverboden (de knippen).
","5 maand voor niet-overtredingen, 5 jaar voor overtredingen",Ja,Mobiliteitsbedrijf Stad Gent,Meer over de dataverwerking,https://verwerkingsregister.stad.gent/verwerking/ea13d3f8-e79a-e811-80dd-adca587e5ac2
Camera,Nummerplaatherkenning,Toegangscontrole autovrij gebied - Drabstraat,51.055350,3.718790,"In het kader van het circulatieplan controleren slimme camera’s de autonummerplaten. Dit in de autovrije gebieden en een aantal doorgangsverboden (de knippen).
","5 maand voor niet-overtredingen, 5 jaar voor overtredingen",Ja,Mobiliteitsbedrijf Stad Gent,Meer over de dataverwerking,https://verwerkingsregister.stad.gent/verwerking/ea13d3f8-e79a-e811-80dd-adca587e5ac2
```
> The `Device` class that gets used internally, additional fields in your api or csv will also be added to this class upon creation. 

```javascript
class Device {
  constructor(
    id,
    title,
    personalData,
    category,
    type,
    contactorg,
    dataprocessing,
    link,
    retention,
    latitude,
    longitude
  ) 
}
```
> An example of a record in the API, the application expects a list of these records as a return value.
```json
{
id: "769b8248e90daa6cd8d90e0a96fa38c80b100682",
title: "Real Time data MUV Monitoring Stations",
category: "Sensor",
type: "Meteo",
dataowner: "Stad Gent - Dienst Data & Informatie",
dataprocessing: "Real-time (5min) data van de verschillende Monitoring Stations verspreid in en rond Gent. Deze Monitoring stations zijn geplaatst in het kader van het Europese MUV project.",
link: "https://data.stad.gent/explore/dataset/real-time-data-muv-monitoring-stations-recentste-waarde/information/",
longitude: 3.751784,
latitude: 51.057832
}
```

## The Leaflet Marker

The card marker component can be found at `src/container/LeafletMarker/index.js`. You can customize the values that are shown in the marker in the render function. If a value is not present in the data of the device, either undefined or null, the label is not shown. If the device has a populated field `device.linklabel` the default linklabel will be overwritten but that value. 

```javascript
  const dataProcessingLabel = t('dataprocessing')
  const personalDataLabel = t('personaldata')
  const retentionLabel = t('retention')
  const contactLabel = t('contactorg')
  const linkLabel = t('linkLabel')
```
```html
    <TextBlock label={dataProcessingLabel} content={device.dataprocessing} />
    <TextBlock label={personalDataLabel} content={device.personalData} />
    <TextBlock label={retentionLabel} content={device.retention} />
    <TextBlock label={contactLabel} content={device.contactorg} />
    <LinkBlock device={device} linkLabel={linkLabel} />
```

![example marker card](https://i.imgur.com/6znzK1G.png)

## The MapLegend

> This component shows all the categories and their respective types, if a custom type icon exists it will be used here and on the map as marker (refer to the icon section for more information about icons). Clicking the category will hide the types.

This list is generated based on the `category` and `type` fields of the `Device` class. The icons are linked by the the `getTypeMarker` found in `src/services/api/marker.js` . Changing the value of category or type in the API will also update it here.

![example legend](https://i.imgur.com/02L8Up4.png)

## The marker icons

If you want your categories or types to have an icon, that icon must be placed in the `src/images` folder. The `src/icons` folder is used for UI icons. Currently the application was build to use `.png` files but it should be possible to change a few lines to have it work with different file types.

When you add new icons they have to be **lowercase** and **end with .png** and have the exact same spelling as your category/type. The category or type does not have to be lowercase.

## How to run the app

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

<img src="https://northsearegion.eu/media/5193/score-02a-colour.png" width="400" /> 

SCORE is a project co-funded by the Interreg North Sea Region Programme 2014-2020.