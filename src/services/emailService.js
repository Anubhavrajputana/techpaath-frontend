import nodemailer from "nodemailer";

export const sendMeetLinkEmail = async (email, name, meetLink) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ceotechpaathsolu@gmail.com",
      pass: "ceotechpaath@7466",
    },
  });

  await transporter.sendMail({
    from: "TechPaath Solutions",
    to: email,
    subject: "🎉 TechPaath Webinar – Google Meet Link",
    html: `
      <h2>Hello ${name} 👋</h2>
      <p>Your webinar is scheduled on <b>26 January</b>.</p>
      <a href="${meetLink}"
        style="padding:12px 18px;background:#2563eb;color:white;border-radius:8px;text-decoration:none">
        Join Google Meet
      </a>
    `,
  });
};
