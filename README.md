# Send Me That!

A [Mixmax](http://developer.mixmax.com/docs/getting-started) integration that takes code-sharing a step further. This lets you share
runnable code that you can actually play with.

![Screenshot of the editor with the text: "When in doubt, Fall 7; Rise 8."](http://i.imgur.com/ZdYwF3Y.png)

---

# Setup!

(I personally use [yarn](https://github.com/yarnpkg/yarn) but
running npm will work here fine as well.)

## Install!

``` npm install ``` or ```yarn```

Then, follow the instructions [here](http://developer.mixmax.com/docs/getting-started) to add the project to your mixmax dashboard.

## Run!

``` npm start ``` or ```yarn start```

Or you can run

``` npm start-like-prod``` or ``` yarn start-like-prod ```

to run with a compressed version of react.

## Test!
We use [jest](https://facebook.github.io/jest/) as our test runner.

``` npm test-watch ``` or ``` yarn test-watch ```

## Create!
You can create new react modules with the create script found in
`scripts/create`. It will autogenerate a sass file and a jest
test for you.

``` npm create MyModuleName ``` or ``` yarn create MyModuleName```
