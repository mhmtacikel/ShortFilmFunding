#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1


echo "These are the environment variables being used:"
echo
echo \$CONTRACT is [ $CONTRACT ]
echo \$FILMID is $FILMID
echo
echo

echo "--------------------------------------------"
echo Report for $CONTRACT
echo "--------------------------------------------"
echo
echo near view \$CONTRACT find '{"id": '\$FILMID'}'  
echo
near view $CONTRACT find '{"id": '$FILMID'}'
echo


