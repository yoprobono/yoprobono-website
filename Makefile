export PATH := node_modules/.bin:$(PATH)
export SHELL := /bin/bash

init:
	git config core.hooksPath .githooks