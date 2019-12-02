# magcore.js

MAG repo for JavaScript codebase to help in project development

## Getting Started

The following dependencies are required to build this application (if you already have Git, NodeJS, and Grunt you can clone the repo and skip to installing dependencies):

 1. Installation
	- Git - download and install for you environment [here](http://git-scm.com/).
	- NodeJS - download and install for your environment [here](http://nodejs.org/).
	- Sass - `npm install -g sass`
	
2. Application Dependencies
	```
	npm install
	```

## Build


## Test

Tests include both functional and unit tests.

### Setup

Install the [JRE](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html) or [JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). Selenium requires Java to run WebDriver tests.

Chrome will need to be at version 78 or higher.

### Running the tests locally

Once installed, intern tests may be tested with a `grunt` script issued
from the root of the repository. To run the unit and functional test suites in headless chrome, run the
following command:

```
grunt test
```

### Writing tests

For information on how to write Intern tests, see
https://theintern.io/docs.html#Intern/4/docs/docs%2Fwriting_tests.md.
