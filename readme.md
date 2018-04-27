The setup uses the ember's in-repo-addon. More here https://ember-cli.com/extending/#developing-addons-and-blueprints

This entire setup is from the reference https://github.com/workmanw/ember-multi-app

#The configuration.

"apps/common" is symlinked to "apps/app1/lib/common" and "apps/app2/lib/common".
"apps/app1/package.json" and "apps/app2/package.json" include "lib/common" as a "ember-addon".
"apps/common/package.json" has keywords for "ember-addon".
"apps/common/app/styles/common.scss" imports all SASS files in the common directory.
"apps/app1/styles/app.scss" and "apps/app2/styles/app.scss" import "common.scss". (THIS IS NOT FUNCTIONAL)
Each app is configured with a different port (see: "apps/app1/.ember-cli" and "apps/app2/.ember-cli")