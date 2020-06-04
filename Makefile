.PHONY: gdoc init fetch dev build

gdoc:
	yarn run fetch-doc

src/index.html: gdoc
	yarn run render-html

fetch: src/index.html

init:
	rm -rf .git/
	git init
	yarn install -D

auth.json:
	@echo "Do you have your auth.json?"
	exit 1

dev: auth.json fetch
	yarn run dev

build: auth.json fetch
	rm -rf dist/
	yarn run build


build-prod: export NODE_ENV = production
build-prod: build
