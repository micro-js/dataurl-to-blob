#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: $(src) $(tests) node_modules
	@NODE_ENV=development hihat test/*.js -- \
		--debug \
		-p tap-dev-tool

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/dataurl-to-blob -d "Turn a dataURL into a blob in a cross-browser way"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
