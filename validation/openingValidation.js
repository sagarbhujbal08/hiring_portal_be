const {check, validationResult} = require('express-validator');

exports.validateOpening = [
  check('jobdescription').trim().escape().not().isEmpty().withMessage('Job description can not be empty!').bail().isLength({min: 10})
  .withMessage('Minimum 10 characters required!').bail(),
  check('noofvacancy').trim().escape().not().isEmpty().withMessage('Number of vacancy can not be empty!').bail(),
  check('position').trim().escape().not().isEmpty().withMessage('Position can not be empty!').bail(),
  check('yearofexperience').trim().escape().not().isEmpty().withMessage('Year of experience can not be empty!').bail(),
  (req, res, next) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];
