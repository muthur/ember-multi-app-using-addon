The setup uses the ember's in-repo-addon. More here https://ember-cli.com/extending/#developing-addons-and-blueprints

This entire setup is from the reference https://github.com/workmanw/ember-multi-app

# The configuration.

- "apps/common" is symlinked to "apps/app1/lib/common" and "apps/app2/lib/common".
- "apps/app1/package.json" and "apps/app2/package.json" include "lib/common" as a "ember-addon".
- "apps/common/package.json" has keywords for "ember-addon".
- "apps/common/app/styles/common.scss" imports all SASS files in the common directory.
- "apps/app1/styles/app.scss" and "apps/app2/styles/app.scss" import "common.scss". (THIS IS NOT FUNCTIONAL)
- Each app is configured with a different port (see: "apps/app1/.ember-cli" and "apps/app2/.ember-cli")

# Launching apps
- Run `npm install` under each app (app1, app2)
- Run `ember serve` under each app (app2, app2) folder and they should be running in different port
- Route `/help` is defined in common and should be available both the apps
- Route `/test` is defined local to app1 and is not available in other app
- Component `full-header` is defined in addon and is available to both the apps
