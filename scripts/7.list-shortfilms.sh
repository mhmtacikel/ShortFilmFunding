#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo "These are the environment variables being used:"
echo
echo \$CONTRACT is [ $CONTRACT ]
echo
echo

echo near view \$CONTRACT findALL '{"offset":0}'
echo 

near view $CONTRACT findALL '{"offset":0}'
echo
echo