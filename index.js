
var Nightmare = require('nightmare');

var leadedge = new Nightmare({
    dock: true,
    show: true,
    width: 1280,
    height: 900,
    cache: false
  })
  .goto('http://159.203.64.50/')
  .wait()
  .wait('form.form-login')
  .wait(100)
  .type('input[name="email"]', 'admin')
  .wait(100)
  .type('input[name="password"]', 'oOu4i0fEw')
  .click('input#btn-login')
  .wait(5000)
  .screenshot('screenshots/home/leadedge-01.png')
  .scrollTo(700, 0)
  .screenshot('screenshots/home/leadedge-02.png')
  .scrollTo(1400, 0)
  .screenshot('screenshots/home/leadedge-03.png')
  .scrollTo(2100, 0)
  .screenshot('screenshots/home/leadedge-04.png')
  .scrollTo(2800, 0)
  .screenshot('screenshots/home/leadedge-05.png')
  .scrollTo(3500, 0)
  .screenshot('screenshots/home/leadedge-06.png')
  .scrollTo(4200, 0)
  .screenshot('screenshots/home/leadedge-07.png')
  .scrollTo(4900, 0)
  .screenshot('screenshots/home/leadedge-08.png')
  .scrollTo(5600, 0)
  .screenshot('screenshots/home/leadedge-09.png')
  .scrollTo(6300, 0)
  .screenshot('screenshots/home/leadedge-10.png')
  .click('a#admin-dropdown')
  .wait(100)
  .click('a#btn-logout')
  .wait(100)
  .run(function (error, nightmare) {
    'use strict';
    if (error) {
      return console.log(error);
    }
    console.log('Done!');
  });
