import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

export const sendWhatsApp = async (phone, meetLink) => {
  await client.messages.create({
    from: "whatsapp:+917466047763",
    to: `whatsapp:${phone}`,
    body: `🎯 TechPaath Webinar Reminder

Join now 👉 ${meetLink}`,
  });
};
