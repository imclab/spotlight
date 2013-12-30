define([
  'extensions/collections/collection'
],
function (Collection) {
  var TableCollection = Collection.extend({

    initialize: function (models, options) {
      this.group_by = options.group_by || null;
      Collection.prototype.initialize.apply(this, arguments);
    },

    queryParams: function() {
      var params = {};
      if (this.group_by) {
        params.group_by = this.group_by;
      }
      return params;
    },

    parse: function (response) {
      return response.data;
    },

    fetch: function (options) {
      Collection.prototype.fetch.call(this, options);
    }
  });

  return TableCollection;
});
