#! /bin/bash
# 单测+报告生成
npm run coverage
# 生成目录文件
npm run guide
# 格式化
npm run prettier
git add .
date=$(date "+%Y-%m-%d-%H:%M:%S")
git commit -m "$date $1"
git push origin master