#!/bin/bash

if [ "$#" -ne 1 ]; then
   echo "Usage: deploy.sh <filename>"
   exit;
fi

# Assumes you have an entry called "codethechange" in your ~/.aws/credentials file 
aws s3 cp $1 s3://codethechangeyyc.ca --profile codethechange

