
SRC = main.js lib/*.js
TESTS = test/*.js
ALL = $(SRC) $(TESTS)
REPORTER = dot

all-test: jshint test

test:
	./node_modules/.bin/mocha --reporter $(REPORTER) $(TESTS)

jshint:
	jshint $(ALL)

.PHONY: all-test test jshint