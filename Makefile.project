.PHONY: gdoc init fetch dev build

build-prod: export NODE_ENV = production
build-prod: build

gdoc:
	yarn run fetch-doc

src/index.html: gdoc
	yarn run render-html

fetch: src/index.html

auth.json:
	@echo "Do you have your auth.json?"
	exit 1

dev: auth.json fetch
	yarn run dev

build: auth.json fetch
	rm -rf dist/*
	yarn run build


gh-pages: build-prod
	(cd dist; git add --all)
	(cd dist; git commit -m "Build output as of $(git log '--format=format:%H' master -1)")
	git push -u origin gh-pages
