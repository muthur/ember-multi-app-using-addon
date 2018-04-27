/* eslint-env node */
'use strict';

module.exports = {
  name: 'common',
  treeForPublic: function(tree) {
    // Return tree as is. This prevents ember-cli from moving the tree to /common.
    return tree;
  },

  treeForApp: function(tree) {
    // Return tree as is. This prevents ember-cli from moving the tree to /common.
    return tree;
  },

  isDevelopingAddon() {
    return true;
  }
};
