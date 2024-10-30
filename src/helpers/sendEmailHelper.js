const VARIABLES = require("../config");
const nodemailer = require("nodemailer");

const transport = {
  service: "Gmail",
  auth: {
    user: VARIABLES.MAIL_USER,
    pass: VARIABLES.MAIL_PASS,
  },
};

const sendAppointmentMessage = async (data) => {
  const transporter = nodemailer.createTransport(transport);

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.RECEIVE_MAIL,
    subject: `New Meeting Request Submitted via Contact Form`,
    html: `
    <body style="background-color: #f4f4f4; margin: 0; padding: 0;">
    <div
        style="max-width: 600px; width: 100%; margin: 0 auto; font-family: 'Cabin',sans-serif; text-align:center; background-color: #ffff;">
        <div style="width: 100%; background-color: #163078; align-items: center; padding:30px 0px">
          
            <p style=" color:#ffff; margin: 0px;     line-height: 39.2px;
    font-size: 28px;">Welcome to Wesell</p>
        </div>


        <div style="padding: 20px; margin-top: 20px; text-align: left; line-break: auto;">
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Name:</strong> ${data?.name}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Email:</strong> ${data?.email}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Phone call:</strong> ${data?.phone}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Whatsapp:</strong> ${data?.whatsapp}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>SMS:</strong> ${data?.sms}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Linkedin:</strong> ${data?.linkedin}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Instagram:</strong> ${data?.instagram}</p>
        </div>

        <div
            style="background-color: #d9eee4; padding:10px; font-size:14px;color:#003399;line-height:160%;text-align:center;word-wrap:break-word">
            <p style="font-size:14px;line-height:160%"><span style="font-size:20px;line-height:32px"><strong>Get in
                        touch</strong></span></p>
            <p style="font-size:14px;line-height:160%"><span style="font-size:16px;line-height:25.6px;color:#000000"><a
                        href="mailto:support@wesell.com"
                        target="_blank">support@wesell.com</a></span>
            </p>
        </div>
        <div style="color:#ffff; background-color: #163078; padding: 1px;">
            <p style="font-size:14px;line-height:180% ; color:#ffff">© 2024 WeSell Inc.</p>
        </div>
    </div>
</body>
  `,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};

const sendContactMessage = async (data) => {
  const transporter = nodemailer.createTransport(transport);

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.RECEIVE_MAIL,
    subject: `New Contact Us Form Submission`,
    html: `
    <body style="background-color: #f4f4f4; margin: 0; padding: 0;">
    <div
        style="max-width: 600px; width: 100%; margin: 0 auto; font-family: 'Cabin',sans-serif; text-align:center; background-color: #ffff;">
        <div style="width: 100%; background-color: #163078; align-items: center; padding:30px 0px">
            
            <p style=" color:#ffff; margin: 0px;     line-height: 39.2px;
    font-size: 28px;">Welcome to Wesell</p>
        </div>


        <div style="padding: 20px; margin-top: 20px; text-align: left; line-break: auto;">
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Name:</strong> ${data?.name}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Email:</strong> ${data?.email}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Phone:</strong> ${data?.phone}</p>
          


            <p style="color: #636465;font-size:14px;line-height:180% ; ">Message</p>
            <div style="margin-left: 15px; margin-top: 0;">
                <p style="color: #636465;font-size:14px;line-height:180% ; ">
                    ${data?.message}
                </p>
            </div>

        </div>

        <div
            style="background-color: #d9eee4; padding:10px; font-size:14px;color:#003399;line-height:160%;text-align:center;word-wrap:break-word">
            <p style="font-size:14px;line-height:160%"><span style="font-size:20px;line-height:32px"><strong>Get in
                        touch</strong></span></p>
            <p style="font-size:14px;line-height:160%"><span style="font-size:16px;line-height:25.6px;color:#000000"><a
                        href="mailto:support@wesell.com"
                        target="_blank">support@wesell.com</a></span>
            </p>
        </div>
        <div style="color:#ffff; background-color: #163078; padding: 1px;">
            <p style="font-size:14px;line-height:180% ; color:#ffff">© 2024 WeSell Inc.</p>
        </div>
    </div>
</body>
  `,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};

module.exports = {
  sendAppointmentMessage,
  sendContactMessage,
};
