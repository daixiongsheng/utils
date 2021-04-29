#! /bin/bash
path=$PWD/docs/logs/
cd $path

now=$(date "+%Y-%m-%d")
files=`ls -Al | grep .md | awk '{print \$NF}'`

# date=`stat -F -t "%Y%m" $i | awk '{print $6}'`
if [[ -f "$now.md" ]]; then
  exit 0
fi
touch "$now.md"
cat >$now.md<<EOF
---
title: '$now'
search: true
---
EOF
cd ../.vuepress/
IFS=$'\n'
out=""
# data=$(cat logs.json)
# for line in $data;do
#     # grep -e ".*\"/logs/.*\"" $line &>/dev/null
#     # if [[ $? -eq 0 ]];then
#     if [[ $line =~ ^.*/logs/[0-9]{4}.*\"$ ]];then
#         tp=${line/\/logs\/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/'/logs/'$now}
#         line=$line',\n'$tp
#     fi
#     out+=$line$'\n'
# done
# $IFS=''
out=''
content=''
for file in $files;do
  if [[ ! $file =~ "index.md" ]];then
    file=${file/.md/}
    out+="### [$file](/logs/$file/)"$'\n'$'\n'
    file="    "\"\/logs\/$file\"
    content+=$file$',\n'
  fi;
done
content+="    "\"\/logs\/$now\"
# IFS=$''
cat >$path/index.md<<EOF
---
title: 更新日志
search: true
---

$out
EOF


# IFS=$''
cat >logs.json<<EOF
{
  "title": "更新日志",
  "path": "/logs/",
  "children": [
$content
  ]
}
EOF
