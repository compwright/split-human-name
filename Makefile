.DEFAULT_GOAL := test

lint:
	yarn standard --fix

test: lint
	NODE_OPTIONS=--experimental-vm-modules yarn jest

release:
	yarn standard-version
