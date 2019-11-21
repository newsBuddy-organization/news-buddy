import DS from 'ember-data';
import ENV from 'news-buddy/config/environment';

export default DS.JSONAPIAdapter.extend({
    
    host: 'https://api.nytimes.com',
  
    
    pathForType() {
        return `svc/mostpopular/v2/viewed/1.json?api-key=${ENV.NYT_API_KEY}`;
      }
    /** 
    init() {
        this._super(...arguments);
    
        this.set('headers', {
          'api-key': ENV.NYT_API_KEY,
        })
      },
      
   
    buildURL(modelName, id, snapshot, requestType, query= {}) {
       /*
         * Add the API key to every query.
        
   
        // query['api-key'] = ENV.NYT_API_KEY;
        
        return this._super(...arguments) ;
}
*/

});