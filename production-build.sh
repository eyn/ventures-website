#!/bin/bash

npm install
node ./node_modules/bower/bin/bower install
node ./node_modules/ember-cli/bin/ember build --environment production
