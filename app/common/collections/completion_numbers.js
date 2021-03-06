define([
  'common/collections/completion'
], function(CompletionCollection) {
  var CompletionNumbersSeries = CompletionCollection.extend({

    parse: function (response) {
      this.data = response.data;
      var that = this;
      var applicationConfiguration = {
        id: "done",
        title: "Done",
        modelAttribute: function (event) {
          return {
            uniqueEvents: _.isUndefined(event) ? null : event.totalCompleted
          };
        },
        collectionAttribute: function (events) {
          return {
            mean: that.numberOfJourneyCompletions() / events.length
          };
        }
      };

      return this.series(applicationConfiguration);
    } 

  });

  return CompletionNumbersSeries;
});

