const express = require('express');
const router = express.Router();

const Produno = require('../models/produno');


//const Ahome = require('../models/ahome');
const nodemailer = require('nodemailer');
 


router.get('/', async (req, res) => {
 
  // let ipad = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress

  //  req.session.views = (req.session.views || 0) + 1  
  // req.session.ip = req.session.req.ip
  // const visitor = new Ahome({views:req.session.views, ip:ipad});
  //await visitor.save();
  const produno = await Produno.find();
 

 //const ahome= await Ahome.find({views});
  res.render('index', { 
    produno, 
    //proddos 
  //  visitor,

 
   // ahome
   // ofertatres
  });
 
});

 
 

// router.get('/visits', async (req, res) => {
//   const totalvisitas = await Ahome.countDocuments({})

//  const ahome= await Ahome.find( );
//   res.render('users/visitors', { 
   
//     ahome,
//     totalvisitas
//   }); 
// });


// router.get('/visitas/:page', async (req, res) => {

//   const totalvisitas = await Ahome.countDocuments({})

//   let perPage = 12;
//   let page = req.params.page || 1;

//   Ahome 
//   .find({}) // finding all documents
//   .sort({ _id: -1 })
//   .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
//   .limit(perPage) // output just 9 items
//   .exec((err, ahome) => {
//     Ahome.countDocuments((err, count) => { // count to calculate the number of pages
//       if (err) return next(err);
//       res.render('users/visitors', {
//         ahome,
//         current: page,
//         pages: Math.ceil(count / perPage),
//         totalvisitas
//       });
//     });
//   });
// });



 


router.get('/contacto', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  res.render('contacto', {

    products: cart.generateArray(), totalPrice: cart.totalPrice
  });
});




router.post('/email', async (req, res) => {
  const { name, email, asunto, message } = req.body;

  contentHTML = `
      <h1>User Information</h1>
      <ul>
          <li>Nombres: ${name}</li>
          <li>Email: ${email}</li>
         
      </ul>
      <ul>
          <li>Asunto: ${asunto}</li>
         
      </ul>
      <p>${message}</p>
  `;

  

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: 'grossicervezas@gmail.com',
   pass: '001Grossi'
   
 }
 });
 
 
 let mailOptions = {
  from: 'lehj09@gmail.com',
  to: 'jhessle04@gmail.com',
  subject: 'email website',
  html: contentHTML
 
 };

 

 
 transporter.sendMail(mailOptions, function(error, info){
  if (error) {
   console.log(error);
  }else{
   console.log('Email sent: ' + info.response);
  }
 });
 res.redirect('/contacto');
});


module.exports = router;
