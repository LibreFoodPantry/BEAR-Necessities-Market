## Development Workflow
* After cloning LIBRE DE FOOD, run yarn to fetch its dependencies. Then, you can run several commands:

* `yarn lint` checks the code style.
* `yarn linc` is like yarn lint but faster because it only checks files that differ in your branch.
* `yarn test` runs the complete test suite.
* `yarn test --watch` runs an interactive test watcher.
* `yarn test` <pattern> runs tests with matching filenames.
* `yarn test-prod` runs tests in the production environment. It supports all the same options as yarn test.
* `yarn debug-test` is just like yarn test but with a debugger. Open chrome://inspect and press “Inspect”.
* `yarn flow` runs the Flow typechecks.
* `yarn build` creates a build folder with all the packages.
