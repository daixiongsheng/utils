#! /bin/bash
tag = `npm version patch`
nrm use npm
npm publish
nrm use taobao
git push origin master
git push origin $tag