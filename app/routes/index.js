import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    queryParams:{
        q:{
            refreshModel: true
        },
    },
    model(params){
        return RSVP.hash({
            articles: this.get('store').findAll('article'),
            lookup: this.store.query('search', {
                q: params.q 
            })
        });
    }

});

