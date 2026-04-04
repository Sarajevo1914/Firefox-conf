#!/usr/bin/env bash
set -euo pipefail

URL="https://raw.githubusercontent.com/yokoffing/Betterfox/refs/heads/main/user.js"

curl -fsSL "$URL" \
| tr -d '\r' \
| sed -E '
:a
/\/\*/{
  N
  /\*\//!ba
  s@/\*[^*]*\*+([^/*][^*]*\*+)*\/@@g
}
s@^[[:space:]]*//.*$@@
s@[[:space:]]+//.*$@@
' \
| grep -v '^[[:space:]]*$' \
| LC_ALL=C sort > betterfox.js
