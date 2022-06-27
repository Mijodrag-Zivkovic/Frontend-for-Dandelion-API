# Dandelion Interface

Frontend for a [Dandelion API](https://dandelion.eu/)

Dandelion API is a semantic text analytics tool. It requires you to register in order to use it. As a "free user", you will have 1000 actions per day limit, so 
have that in mind.

My frontend solution provides friendly user interface for a few of Dandelion tools:
- [Entity Extraction](https://dandelion.eu/semantic-text/entity-extraction-demo/?text=The+Mona+Lisa+is+a+16th+century+oil+painting+created+by+Leonardo.+It%27s+held+at+the+Louvre+in+Paris.&lang=auto&min_confidence=0.6&exec=true#results)
- [Text Similarity](https://dandelion.eu/semantic-text/text-similarity-demo/?text1=Reports+that+the+NSA+eavesdropped+on+world+leaders+have+%22severely+shaken%22+relations+between+Europe+and+the+U.S.%2C+German+Chancellor+Angela+Merkel+said.&text2=Germany+and+France+are+to+seek+talks+with+the+US+to+settle+a+row+over+spying%2C+as+espionage+claims+continue+to+overshadow+an+EU+summit+in+Brussels.&lang=auto&exec=true)
- [Language Detection](https://dandelion.eu/docs/api/datatxt/li/v1/)
- [Sentiment Analysis](https://dandelion.eu/semantic-text/sentiment-analysis-demo/?appid=it%3A585027354&exec=true)

In order to use Dandelion API, you will need to paste your token ([found here](https://dandelion.eu/profile/dashboard/)) in the "Configuration" page of this app.

Disclaimer: I have written this solution around 10.2021., so there could be some changes to the currrent version of Dandelion API, and some of the tools mentioned above may not work any more.

In order to use this app, you will need to download Node.js.
In order to install node modules, navigate your CLI to project folder and run "run npm install".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
