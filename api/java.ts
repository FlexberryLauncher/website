import axios from "axios";
export default async function handler(req, res) {
  axios.get(process.env.API_DATAS_JAVA).then(({ data }) => {
    res.status(200).send(data);
    console.log("GET /api/java", "| -> success");
  }).catch(() => {
    console.log("GET /api/java", "| -> error");
    res.status(500).send({
      error: "An error has occurred, let us know at https://discord.gg/" + process.env.DISCORD_INVITE_CODE
    });
  });
}