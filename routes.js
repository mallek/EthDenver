const routes = require('next-routes')();

routes
  .add('/coops/new', '/coops/new')
  .add('/coops/:address', '/coops/show')
  .add('/coops/:address/requests', '/coops/requests/index')
  .add('/coops/:address/requests/new', '/coops/requests/new');

module.exports = routes;
