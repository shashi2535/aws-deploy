const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://graphqlt:WDcWS9jmhbKezsuj@cluster0.c2lwbwt.mongodb.net/test-demo",
    {
      useNewUrlParser: true,
      useUnifiedtopology: true,
    }
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch(() => {
    console.log("not connected");
  });
