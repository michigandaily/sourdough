init:
	rm -rf .git/
	yarn install -D
	mv Makefile.project Makefile
	git init
	git add .
	git commit -m "Initial Commit"
	git worktree add -b gh-pages dist
