const app = require("./index");
const connect = require("./configs/db");

app.listen(8767, async () => {
  try {
    await connect();
    console.log("listening on port 8767");
  } catch (e) {
    console.log(e.message);
  }
});
