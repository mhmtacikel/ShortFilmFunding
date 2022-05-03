#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$DIRECTOR" ] && echo "Missing \$DIRECTOR environment variable" && exit 1

echo
echo 'About to call sendFund() on the contract'
echo 'This is the function used to send the funds in the contract to the short film DIRECTOR.'
echo 
echo near call \$CONTRACT sendFund '{"id": '\$FILMID'}' --accountId \$DIRECTOR 
echo
echo \$CONTRACT is $CONTRACT
echo \$DIRECTOR is $DIRECTOR
echo \$FILMID is $FILMID
echo 
echo 

near call $CONTRACT sendFund '{"id": '$FILMID'}' --accountId $DIRECTOR 

echo
echo

