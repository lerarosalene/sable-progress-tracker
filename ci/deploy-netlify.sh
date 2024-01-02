#!/bin/env bash

pushd dist
  tree .
  zip -r ../dist.zip .
popd

curl \
  -H"Content-Type: application/zip" \
  -H"Authorization: Bearer $NETLIFY_TOKEN" \
  -XPOST \
  --data-binary "@dist.zip" \
  "https://api.netlify.com/api/v1/sites/2efd6b93-926e-4a29-a0bd-e6907088729e/deploys"
