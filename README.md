## Quick start

1. Clone this repository

### Using Yarn

2. Make sure you have [Yarn](https://yarnpkg.com/) installed.
3. After installing `yarn`, open a terminal and run `yarn install` in the main volt folder to download all project dependencies.

```
yarn install
```

4. Then start the app in development mode by running the following command in terminal:

```
yarn start
```

5. Open http://localhost:3000 to view it in the browser. Any changes you make to the code will be automatically reflected in the browser.

6. If you want to generate the production files, change the `homepage` value from the `package.json` to the domain name that the app will be hosted on, and then run the following command in the terminal:

```
yarn build
```

### Using NPM

1. Make sure you have [Node.js](https://nodejs.org/en/) installed. Make sure the installed Node version is >= 8.10 and of npm >= 5.6

2. After installing Node.js, open a terminal and run `npm install` in the main `volt-react-dashboard/` folder to download all project dependencies. You'll find them in the `node_modules/` folder.

```
npm install
```

3. Then start the app in development mode by running the following command in terminal:

```
npm run start
```

4. Open http://localhost:3000 to view it in the browser. Any changes you make to the code will be automatically reflected in the browser.

5. If you want to generate the production files, change the `homepage` value from the `package.json` to the domain name that the app will be hosted on, and then run the following command in the terminal:

```
npm run build
```

## Documentation

## File Structure

Within the download you'll find the following directories and files:

```
Monitor Nidec GA
.
├── LICENSE.md
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── site.webmanifest
├── src
│   ├── assets
│   │   ├── img
│   │   └── syntax-themes
│   ├── components
│   │   ├── AccordionComponent.js
│   │   ├── Charts.js
│   │   ├── Code.js
│   │   ├── CodeEditor.js
│   │   ├── Documentation.js
│   │   ├── Footer.js
│   │   ├── Forms.js
│   │   ├── Incidencias.js
│   │   ├── Navbar.js
│   │   ├── Preloader.js
│   │   ├── Progress.js
│   │   ├── Registro.js
│   │   ├── ScrollToTop.js
│   │   ├── Sidebar.js
│   │   ├── Tables.js
│   │   └── Widgets.js
│   ├── data
│   │   ├── charts.js
│   │   ├── commands.js
│   │   ├── notifications.js
│   │   ├── pages.js
│   │   ├── tables.js
│   ├── index.js
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── components
│   │   ├── dashboard
│   │   ├── examples
│   │   └── tables
│   ├── routes.js
│   └── scss
│       ├── volt
│       └── volt.scss
└── yarn.lock

```