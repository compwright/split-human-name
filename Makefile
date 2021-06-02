clean:
	rm -Rf ./dist

build: clean
	npx parcel build ./src/index.js
