#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# commit提交所有文件
git add -A
git commit -m 'chore'

# 推送
git push -f https://gitee.com/wumo1016/wmview-docs.git master

cd -