import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['q'],
    actions:{
        submit(search){
            this.transitionToRoute('articles',{queryParams: {q: search}})
        }
    }
});
