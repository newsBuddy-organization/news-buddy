import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: '_id',
    keyForAttribute(key) {
      return key;
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data = payload.results;
        payload.data.forEach(item => {
        item.type = primaryModelClass.modelName;
        item.attributes = {
        url: item.url,
        title: item.title,
        abstract: item.abstract,
        imgurl: item.media[0]['media-metadata'].find(item => item.format === 'mediumThreeByTwo210').url
        };

        delete item.imgurl;
        delete item.url;
        delete item.title;
        delete item.abstract;
      });


    return this._super(...arguments);
  }
});