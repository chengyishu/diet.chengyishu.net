#!/bin/bash
cd "$(dirname "$0")" || exit
browser-sync start --server --files "**/*.html,**/*.css,**/*.js" --no-notify --port 80