import Route from '@ember/routing/route';

export default Route.extend({
    queryParams:{
        q:{
            refreshModel: true
        },
    },
    model(){
        return this.get('store').findAll('article');
    },
    model(params){
        return this.store.query('search', {
            q: params.q 
          });
    }
});
