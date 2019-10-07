#!/bin/sh

# Assumes you have an entry called "codethechange" in your ~/.aws/credentials file 
aws s3 cp --recursive --exclude ".git" . s3://codethechangeyyc.ca --profile codethechange

