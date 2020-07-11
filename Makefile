init:
	rm -rf .git/
	git init
	yarn install -D
	git worktree add dist gh-pages
	mv Makefile.project Makefile
