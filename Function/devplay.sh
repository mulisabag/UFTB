#!/usr/bin/env bash
#export HTTP_PROXY=http://127.0.0.1:8889/
#export ADB_VERSION=39
chmod -R 777 jre
./jre/bin/java -Ddevplay.home="$PWD" -jar dev-play-runtime-impl-3.10.00-SNAPSHOT-jar-with-dependencies.jar
