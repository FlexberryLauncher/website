import axios from "axios";
export default async function handler(req, res) {
  // Required format is:
  // Name<String>:Amount<Number>:Type<String>
  // OTP: One Time Payment
  // SUB: Subscription
  // Example: "Kuzey Kurtuluş:10:OTP"
  const donators = process.env.API_DATAS_DONATORS?.split(";");
  if (!donators) 
    return res.status(500).send({
      error: "An error has occurred, let us know at https://discord.gg/" + process.env.DISCORD_INVITE_CODE
    });
  const donatorsData = [];
  donators.forEach(donator => {
    let d = donator.split(":");
    donatorsData.push({
      name: d[0],
      amount: d[1],
      type: d[2].toUpperCase()
    });
  });
  res.status(200).send(donatorsData);
}