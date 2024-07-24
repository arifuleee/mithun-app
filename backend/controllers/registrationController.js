const nodemailer = require('nodemailer');

exports.register = async (req, res) => {
  const { name, school, grade, email, contactNumber, address, interestReason, courseInterest } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ariful.eee@gmail.com', // Replace with your email
      pass: 'lapnjtyojvvepvie'   // Replace with your email password
    }
  });

  const mailOptions = {
    from: 'ariful.eee@gmail.com', // Replace with your email
    to: 'aurbot.arif@gmail.com',
    subject: 'New STEM Education Registration',
    text: `
      Name: ${name}
      School/Institute Name: ${school}
      Class/Grade: ${grade}
      Email Address: ${email}
      Contact Number: ${contactNumber}
      Address: ${address}
      Why interested in STEM education: ${interestReason}
      Interested Course: ${courseInterest}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Registration details sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error); // Log detailed error
    res.status(500).json({ error: 'Failed to send registration details.' });
  }
};
