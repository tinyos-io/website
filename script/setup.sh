#!/bin/sh

echo "==> Setup node environment"

# clean project
cd .. & cd project

if [ -e package.json ]
then
    echo "==> Install from package.json node environment"
    npm install  # from package.json
else
    ./../script/init.sh
fi
