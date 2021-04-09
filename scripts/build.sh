#!/bin/bash


rm -rf ./lib ./output
tsc --build ./tsconfig.json
npm run rollup