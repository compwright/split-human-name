clean:
	rm -Rf ./dist

build: clean
	npx parcel build ./src/browser.js

.DEFAULT_GOAL := build
