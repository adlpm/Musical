#!/bin/bash

ROOT_DIR=/usr/share/nginx/html

function join_by {
    local d=${1-} f=${2-}
    if shift 2; then printf %s "$f" "${@/#/$d}"; fi
}

subst_list=(
    "VUE_APP_SPOTIFY_API_CLIENT_ID"
    "VUE_APP_SPOTIFY_API_CLIENT_SECRET"
    "VUE_APP_SPOTIFY_REDIRECT_URL"
    "VUE_APP_API_BASE_URL"
    "BASE_URL"
)

fields=()

for env_name in "${subst_list[@]}"; do
    fields+=("\"$env_name\": \"$(printenv "$env_name")\"")
done

CONFIG="window.configs = { $(join_by , "${fields[@]}") }"

sed -i "s@// CONFIGURATIONS_PLACEHOLDER@${CONFIG}@" $ROOT_DIR/index.html

exec "$@"
