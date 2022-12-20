const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {

	// Initializing sendgrid object
	const mailer = require("@sendgrid/mail");

	// Insert your API key here
	mailer.setApiKey('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');
	
	// Setting configurations
	const msg = {
	to: ["mohanedbouzaidi@gmail.com"],
	from: "mohanedbouzaidi@gmail.com",
	subject: "Message sent for demo purpose",
	html:
		"<h1>New message from Geeksforgeeks</h1><p>Some demo text from geeksforgeeks.</p>"
	};

	// Sending mail
	mailer.send(msg, function(err, json) {
	if (err) {
		console.log(err);

		// Writing error message
		res.write("Can't send message sent");
	} else {

		// Writing success message
		res.write("Message sent");
	}
	});

	res.end();
})
.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
