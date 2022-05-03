#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$FUNDER" ] && echo "Missing \$FUNDER environment variable" && exit 1

echo
echo 'About to call fundShortFilm() on the contract'
echo 
echo near call \$CONTRACT fundShortFilm '{"id": '\$FILMID'}' --accountId \$FUNDER --amount \$1
echo
echo \$CONTRACT is $CONTRACT
echo \$FUNDER is $FUNDER
echo \$FILMID is $FILMID
echo \$1 is [ $1 NEAR] '(Enter amount to fund)'
echo 

near call $CONTRACT fundShortFilm '{"id": '$FILMID'}' --accountId $FUNDER --amount $1

echo
echo
