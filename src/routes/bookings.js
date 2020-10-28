const express = require('express');
const smsc = require('../../smsc_api');

smsc.configure({
  login: 'cinemaobninsk',
  password: 'kino2018',
  //ssl : true/false,
  //charset : 'utf-8',
});
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.render('booking');
  })
  .post(async (req, res) => {
    const { name, phone, date, time, checkbox } = req.body;
    const formatedDate = date.split('-').reverse().join('.');

    // smsc.send_sms(
    //   {
    //     phones: ['79168524327'],
    //     mes: `Бронирование: ${name}, ${phone}, дата/время: ${formatedDate} ${time}`,
    //   },
    //   function (data, raw, err, code) {
    //     if (err) return console.log(err, 'code: ' + code);
    //     console.log(data); // object
    //     console.log(raw); // string in JSON format
    //   }
    // );

    res.json({
      message1: 'Благодарим Вас за запрос!',
      message2: 'Администратор свяжется с Вами в ближайшее время.',
    });
  });

module.exports = router;
