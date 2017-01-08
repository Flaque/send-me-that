# Reset-console
This module is weird and special, so it has some extra documentation.

Since we want to show `console.log` output to the screen instead of to the browser console, we're going to hijack `console.*`. But since we don't want to do this everywhere, we need to insert it in with the user code. That means we're going to load this in with a template. But templates don't test super well.

To get this under our test coverage, we're going to have a real JS file that the test file will import. Then, our build script will move
this over into a txt file so we're super explicit when loading the template
that we're loading the JS text and not the actual code.
