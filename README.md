

![Rick and Morty image](https://github.com/Adalab/modulo-3-evaluacion-final-amandapalma/blob/styles/src/images/Rick_and_Morty_logo_blue.svg)

This is my **Rick & Morty character browser**, done as an evaluation exercise in [Adalab](https://adalab.es/).

The project consists of developing a web application to filter and find the information related to the characters of Rick & Morty comic / serie. 

## Home page

![Home](https://github.com/Adalab/modulo-3-evaluacion-final-amandapalma/blob/master/src/images/screenshots/home.png)


## Details Page

When you click on a character you are redirected to a second page where you find a detail card of that character.

![Details Card](https://github.com/Adalab/modulo-3-evaluacion-final-amandapalma/blob/master/src/images/screenshots/detailsCard.png)

## Error messages

In addition, if you type an incorrect search, an incorrect route, or try to access to a character details directly through a route, with the wrong id, you will get the following screens:

**Search not found**

![Search not found](https://github.com/Adalab/modulo-3-evaluacion-final-amandapalma/blob/master/src/images/screenshots/searchNotfound.png)

**Route not found***

![Route not found](https://github.com/Adalab/modulo-3-evaluacion-final-amandapalma/blob/master/src/images/screenshots/routeNotFound.png)

**Character id route not found**

![Character Id not found](https://github.com/Adalab/modulo-3-evaluacion-final-amandapalma/blob/master/src/images/screenshots/characterIdNotFound.png)


The web application is developed with :crystal_ball: [React](https://reactjs.org/), and stylized with :sparkles: [CSS-Sass](https://sass-lang.com/). 

**The project is still in progress but you can take a look. I hope you enjoy it!!!**

.<br />
## :wrench: To run this project

1. Firs of all, you need to download and install Node.js. You can get it [here](https://nodejs.org/es/download/).<br />
2. Clone or download the repository in your computer.<br />
3. Install the dependencies in the local node_modules folder. By default, npm install will install all modules listed as dependencies in package.json.

#### `npm install`

4. Install React

#### `npm install -g create-react-app`

3. Install React Router component

#### `npm install --save react-router-dom`

4. Install Sass

#### `npm install node-sass`

5. Install Font Awesome component. More info [here](https://fontawesome.com/how-to-use/on-the-web/using-with/react).

#### `npm i --save @fortawesome/fontawesome-svg-core`
#### `npm install --save @fortawesome/free-solid-svg-icons`
#### `npm install --save @fortawesome/react-fontawesome`

6. Istall PropTypes library

 #### `npm install --save prop-types`

7. Finally to run the app in local host, type: 

#### `npm start`


.<br />
## :file_folder: Folder structure

```
/
|-docs
|-node_modules
|-public
|-src
|
|-components
| |-layout
|   |- App.js
|   |- Header.js
|   |- List.js
|   |- Card.js
|   |- CardDetail.js
|   |- Footer.js
|   |- app.scss
|   |- header.scss
|   |- list.scss
|   |- card.scss
|   |- cardDetail.scss
|   |- footer.scss
| |-actions
|   |- SearchNotFound.js
|   |- RouteNotFound.js
|   |- FilterByName.js
|   |- searchnotFound.scss
|   |- routenNotFound.scss
|   |- filterByName.scss
|
|-images
|
|-services
| |- getDataFromApi.js
|
|-stylesheets
|   |- variables.scss
|   |- mixins.scss
|   |- reset.scss
|   |- typography.scss
|
|-index.js
|-index.scss
|-App.test.js
|-.gitignore
|-package-lock.json
|-package.json
|-README.md
|
\

```
.<br />
## :handshake: Contributing :dancers:

If you want to contribute, it could be great! feel free to open a pull request.<br />
Contributions, issues and feature requests are welcome.<br />
.<br />
##  :zap: Author

This project has been powered with blood, sweat, and a lot of :purple_heart: by the person who writes this Readme.

Hello! :raising_hand: :smiley:
My name is Amanda Palma :palm_tree:. I'm a spanish junior front end developer who loves learn learn and learn and never end!

For whatever you want, free to contact me by:

:bird: [Twitter](https://twitter.com/amandapalmaav)
:briefcase: [Linkedin](https://www.linkedin.com/in/amanda~palma/)
:computer: [GitHub](https://github.com/amandapalma)
.<br />
## :memo: License

Creative Commons License 2020 <br />
* `BY-NC-SA` – [Attribution-NonCommercial-ShareAlike](https://github.com/idleberg/Creative-Commons-Markdown/blob/master/4.0/by-nc-sa.markdown)

