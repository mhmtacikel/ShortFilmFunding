#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$DIRECTOR" ] && echo "Missing \$DIRECTOR environment variable" && exit 1

echo
echo 'About to call remove() on the contract'
echo 
echo near call \$CONTRACT remove '{"id": '\$FILMID'}' --accountId \$DIRECTOR
echo
echo \$CONTRACT is $CONTRACT
echo \$DIRECTOR is $DIRECTOR
echo \$FILMID is $FILMID 'You should export the short film id to select the short film you want to remove. '
echo 'export FILMID=<filmId>'
echo 'Are you sure you want to remove this film? (y/n)'
read -r answer
if [ "$answer" != "${answer#[Yy]}" ] ;then
    near call $CONTRACT remove '{"id": '$FILMID'}' --accountId $DIRECTOR
fi
echo
echo

