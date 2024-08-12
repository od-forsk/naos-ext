rm -Rf src/naosclient

npx openapi \
    -i http://localhost:9090/v1/openapi.json \
    -o src/naosclient \
    -c axios \
    --postfixModels Model \
    --name NaosClient

# then change:
# import * as FormData from 'form-data';
# to
# import * as FormData from 'form-data';
# in request.ts