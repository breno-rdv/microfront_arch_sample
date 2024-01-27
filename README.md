# Micro-frontend App Sample
A sample application featuring micro-frontend architecture

## A little bit about Micro-frontend architecture
Micro-frontend, as its twin, is a small piece of software, defined by its bounded context, that will interact with others to achieve a specific goal.

>The idea behind Micro-frontends is to think about a web app as a composition of features which are owned by independent teams. 

#### Core concepts
- Be technology agnostic
- Teams working independently
- Favor Native Browser APIs rather than Custom APIs

> Remember: Unlike microservices, all Micro-frontends will be sharing the same engine and running on top of the same platform.

## Description
Mimicking a `Online Cryptocurrency shop`, the application is composed by three micro-frontends, one being the host app, and the other two being components (Header and Checkout).

Technologies used:
- Webpack
- React

> Webpack is one of the most popular Module Bundlers, in which includes Module Federation, for building micro-frontends.

## Running the project

The three Micro-frontends can be ran separately, but in order to have it running perfectly, without having to refresh the page, re-run the build, etc., let's run them in a safe order.

### Running Checkout App

From the `root` folder, navigate to `checkout_app` folder, and:

Install the dependencies;
````bash
npm install
````

Run the build;
````bash
npm run build
````

And then, run the application;
````
npm run remote
````

> A web browser will show up, that can be closed, as it will not "work" alone, instead its bundle will be served to the host app.

### Running Header App

From the `root` folder, navigate to `header_app` folder, and:

Install the dependencies;
````bash
npm install
````

Run the build;
````bash
npm run build
````

And then, run the application;
````
npm run remote
````

> A web browser will show up, that can be closed, as it will not "work" alone either, instead its bundle will be served to the host app.

### Final step, run the host app

From the `root` folder, navigate to `main_app` folder, and:

Install the dependencies;
````bash
npm install
````

Run the build;
````bash
npm run build
````

And then, run the application;
````
npm run serve
````

> A web browser will show up, and kaboom, the application is ready for you to buy some bitcoins.
