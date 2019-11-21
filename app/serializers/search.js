import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: '_id',
    keyForAttribute(key) {
      return key;
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data = payload.response.docs;
        payload.data.forEach(item => {
        item.type = primaryModelClass.modelName;
        item.attributes = {
        url: item.web_url,
        abstract: item.abstract,
        title: item.headline.main
        };

        delete item.url;
        delete item.title;
        delete item.abstract;
      });


    return this._super(...arguments);
  }
});