#!/bin/sh
set -eu

if [ -n "${API_BEARER_TOKEN_FILE:-}" ]; then
  [ -r "$API_BEARER_TOKEN_FILE" ] || {
    echo "API bearer token file is not readable" >&2
    exit 1
  }
  NUXT_API_BEARER_TOKEN=$(cat "$API_BEARER_TOKEN_FILE")
  [ -n "$NUXT_API_BEARER_TOKEN" ] || {
    echo "API bearer token file is empty" >&2
    exit 1
  }
  export NUXT_API_BEARER_TOKEN
fi

exec "$@"
