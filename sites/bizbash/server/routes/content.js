const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('../api/fragments/content-page');
const content = require('../templates/content');
const supplier = require('../templates/content/supplier');
const topList = require('../templates/content/top-list');
const venue = require('../templates/content/venue');

module.exports = (app) => {
  app.get('/*?supplier/:id(\\d{8})*', withContent({
    template: supplier,
    queryFragment,
  }));
  app.get('/*?top-list/:id(\\d{8})*', withContent({
    template: topList,
    queryFragment,
  }));
  app.get('/*?venue/:id(\\d{8})*', withContent({
    template: venue,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
