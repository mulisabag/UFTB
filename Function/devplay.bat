@echo off
rem chcp 65001
rem set ADB_VERSION=39
set LOCAL_OPT=
rem set LOCAL_OPT=-Dfile.encoding=UTF-8 -Duser.country=US -Duser.language=en
set DEBUG_OPT=
rem set DEBUG_OPT=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=127.0.0.1:8000
"%~dp0\jre\bin\java" %DEBUG_OPT% %LOCAL_OPT% -Ddevplay.home="%CD%" -jar dev-play-runtime-impl-3.10.00-SNAPSHOT-jar-with-dependencies.jar