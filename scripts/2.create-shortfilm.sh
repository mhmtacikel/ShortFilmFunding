#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$DIRECTOR" ] && echo "Missing \$DIRECTOR environment variable" && exit 1

echo
echo 'About to call create() on the contract'
echo 
echo near call \$CONTRACT create '{"name":"$1", "directorName":"$2","wallet":'\$DIRECTOR'}' --accountId \$DIRECTOR
echo
echo \$CONTRACT is $CONTRACT
echo \$DIRECTOR is $DIRECTOR
echo \$1 is [ $1 ] '(ShortFilm name)'
echo \$2 is [ $2 ] '(Director name)'
echo 
echo
near call $CONTRACT create '{"name":"'"$1"'", "directorName":"'"$2"'","wallet":'$DIRECTOR' }' --accountId $DIRECTOR

echo run the following commands
echo
echo 'export FILMID=<filmId>'
echo 
echo 
