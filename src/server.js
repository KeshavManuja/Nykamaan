const app = require("./index");
const connect = require("./configs/db");
require("dotenv").config()
app.listen(process.env.PORT || 8767, async () => {
  try {
    await connect();
    console.log("listening on port 8767");
  } catch (e) {
    console.log(e.message);
  }
});
