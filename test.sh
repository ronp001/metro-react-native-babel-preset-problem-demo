#!/bin/sh

echo "********** step 1:  running babel with metro-react-native-babel-preset"
npx babel --compact=false --config-file ./babelrc-only-metro-preset.jsonc src/* > output_preset.js
cat output_preset.js

echo "********** step 2:  running babel with transform-parameters AFTER typescript"
npx babel --compact=false --config-file ./babelrc-with-transform-after-ts.jsonc src/* > output_transform_after_ts.js
cat output_transform_after_ts.js

echo "********** comparing output (should be identical)"
diff output_preset.js output_transform_after_ts.js

