import DS from 'ember-data';
import ENV from 'news-buddy/config/environment';

export default DS.JSONAPIAdapter.extend({
    
    host: 'https://api.nytimes.com',
  
    
    pathForType() {
        return `svc/search/v2/articlesearch.json`;
      },
    
      buildURL(modelName, id, snapshot, requestType, query= {}) {
 
        query['api-key'] = ENV.NYT_API_KEY;

         
         return this._super(...arguments) ;
 }
    

});