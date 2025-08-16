const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure the email transport using Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // CORRECT: This securely gets the email and password you set in the terminal
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

// This is the Cloud Function that will be triggered
exports.sendEmailOnNewSubmission = functions.firestore
  .document("submissions/{submissionId}")
  .onCreate((snap, context) => {
    const submissionData = snap.data();

    const mailOptions = {
      // CORRECT: This uses the configured email
      from: `"Arvion Website" <${functions.config().gmail.email}>`,
      to: "arviontechnologies@gmail.com",
      subject: "New Contact Form Submission from Arvion Website",
      html: `
        <h1>New Lead from your Website!</h1>
        <p><strong>Name:</strong> ${submissionData.name}</p>
        <p><strong>Email:</strong> ${submissionData.email}</p>
        <p><strong>Company:</strong> ${submissionData.company}</p>
        <p><strong>Phone:</strong> ${submissionData.phone}</p>
        <p><strong>Job Title:</strong> ${submissionData.jobTitle}</p>
        <p><strong>Country:</strong> ${submissionData.country}</p>
        <hr>
        <h3>Services Interested In:</h3>
        <ul>
          ${submissionData.services.map((s) => `<li>${s}</li>`).join("")}
        </ul>
        <p><strong>Number of Students:</strong> ${
          submissionData.studentRange || "N/A"
        }</p>
        <p><strong>Requested Meeting Slot:</strong></p>
        <p><strong>Date:</strong> ${submissionData.date}</p>
        <p><strong>Time Slot:</strong> ${submissionData.timeSlot}</p>
      `,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return;
      }
      console.log("Email sent successfully:", info.response);
    });
  });