const express = require('express');
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
   res.send("3000");
});

app.post("/", (req, res) => {
    res.status(200).json({  
         success: true,    
         msg: req.body.msg,
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
