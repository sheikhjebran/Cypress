npm init--> to create a project

To install cypress
npm install cypress --save-dev


To Open cypress module --> ./node_modules/.bin/cypress open --> or to start the cypress server

To Install cucumber module
npm install --save-dev cypress-cucumber-preprocessor



To Run on CI
 ./node_modules/.bin/cypress run --record --key 22245c17-b129-4464-ad40-a4884c6fc289


For Parallel Execution

./node_modules/.bin/cypress run --record --key b0411b26-6699-4751-90be-dcfeafb97d0c --browser chrome --parallel --ci-build-id 0001


Mochave
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

npm install mochawesome-merge --save-dev


./node_modules/.bin/mochawesome-merge cypress/report/mochawesome-report/*.json > cypress/report/output.json

sudo npm install marge

./node_modules/.bin/marge cypress/report/output.json --reportDir ./ --inline