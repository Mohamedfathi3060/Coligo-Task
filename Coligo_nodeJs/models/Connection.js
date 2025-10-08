const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE).then((con) => {
  console.log(`DB Connected Succssfully`);
});
