// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

router.get(/orgType/, function (req, res) {
    if (req.query.incomesingle === "gp-practice") {
      res.redirect('epact-gp-details-auth'); 
    } else if (req.query.incomesingle === "primary-care-network") {
      res.redirect('epact-pcn-access');
    } else if (req.query.incomesingle === "trust-other") {
      res.redirect('epact-trust-access');
    } else if (req.query.incomesingle === "commissioning-support-unit") {
      res.redirect('epact-which-csu');
    } else if (req.query.incomesingle === "national-orgs") {
      res.redirect('epact-national-access');
    } else if (req.query.incomesingle === "other-orgs") {
      res.redirect('epact-which-org');
    } else {
      return;
    }
  });