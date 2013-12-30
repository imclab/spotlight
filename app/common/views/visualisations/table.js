define([
  'extensions/views/view',
  'tpl!common/templates/visualisations/table.html'
],
function (View, template) {
  var TableView = View.extend({

    template: template,

    initialize: function (options) {
      View.prototype.initialize.apply(this, arguments);
    },

    templateContext: function () {
      var columns = [];

      _.each(this.model.get('column_meta'), function (columnMeta) {
        var column = {
          title: columnMeta.title,
          data: this.collection.map(function (model) {
            return model.get(columnMeta.valueAttr);
          })
        };
        columns.push(column);
      }, this);

      return _.extend(
        View.prototype.templateContext.apply(this, arguments),
        {
          numValues: this.collection.length,
          columns: columns
        }
      );
    }
  });

  return TableView;
});
