#! /bin/bash
npm version patch
nrm use npm
npm publish
nrm use taobao
git push origin master