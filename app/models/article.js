import DS from 'ember-data';
const { Model } = DS;

const { attr } = DS;

export default Model.extend({

    url: attr('string'),
    title: attr('string'),
    abstract: attr('string'),
    imgurl: attr('string')
    // imgurlBig: attr('string')

});
