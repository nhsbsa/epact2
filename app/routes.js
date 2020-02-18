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
    } else if (req.query.incomesingle === "local-team") {
      res.redirect('epact-which-team');
    } else {
      return;
    }
  });

  router.get(/pcnAccess/, function (req, res) {
    if (req.query.incomesingle === "prescriber") {
      res.redirect('epact-pcn-auth'); 
    } else if (req.query.incomesingle === "national-dashboard") {
      res.redirect('epact-pcn-details');
    } else if (req.query.incomesingle === "national-level") {
      res.redirect('epact-pcn-details');
    } else {
      return;
    }
  });

  router.get(/ccgAddAnother/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('epact-which-ccg');
    } else {
      res.redirect('epact-csu-cya');
    }
  });

  router.get(/ccgChangeRemove/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('epact-ccg-add-another2');
    } else {
      res.redirect('epact-ccg-add-another');
    }
  });