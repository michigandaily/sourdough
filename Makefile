.PHONY: gdoc init

gdoc:
	yarn run fetch-doc

src/index.html: gdoc
	yarn run render-html

fetch: src/index.html

init:
	rm -rf .git/
	git init
