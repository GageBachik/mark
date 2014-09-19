var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'bagelsandbjs247@gmail.com',
        pass: 'Uruquizas!655'
    }
});


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	submit: function(req, res) {
		var data = req.body;
		// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: 'bagelsandbjs247@gmail.com', // sender address
		    to: 'markamirez@gmail.com',
		    subject: 'My Name is ' + data.name + ' and my email is ' + data.email, // Subject line
		    text: data.message, // plaintext body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        res.send(error);
		    }else{
		        res.send('Message sent: ' + info.response);
		    }
		});
	},
	mikael: function(req, res) {
		res.render('mikael');
	}
};

module.exports = indexController;