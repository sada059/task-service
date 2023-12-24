class AbstractRoutes {
    constructor() {
      const router = require('express').Router();
      this.router = router;
    }
  }
  
  module.exports = AbstractRoutes;
  