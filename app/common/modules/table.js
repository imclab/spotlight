define([
  'extensions/controllers/module',
  'common/views/visualisations/table',
  'common/collections/table'
],
function (ModuleController, TableView, TableCollection) {
  var TableModule = ModuleController.extend({
    className: 'table',
    visualisationClass: TableView,
    collectionClass: TableCollection,
    clientRenderOnInit: true,
    requiresSvg: false,

    collectionOptions: function () {
      return {
        group_by: this.model.get('group_by')
      };
    }
  });

  return TableModule;
});
