init:
	rm -rf .git/
	git init
	yarn install -D
	mv Makefile.project Makefile
