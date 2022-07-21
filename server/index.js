require('dotenv').config()
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

var options;
const fs = require('fs');
fs.readFile("C:/Users/artei/Desktop/arteiro.xyz/server/assets/resultados.txt", 'utf8', (err, data) => {
  if (err) {
    console.log(400);
    return;
  }
  options = data;
});


app.use(cors());
app.use(bodyParser.json());


app.post('/login', (req, res) =>{
   const code = req.body.code;
  const spotifyApi=new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi.authorizationCodeGrant(code).then(data=>{
    res.json({
      acessToken:data.body.access_token,
      refreshToken:data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(400);
  })
})

app.post('/refresh',(req, res)=>{
  const refreshToken=req.body.refreshToken;
  const spotifyApi=new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi.refreshAccessToken( ).then(data=>{
    res.json({
      acessToken: data.body.acessToken,
      expiresIn: data.body.expires_in,
    })
  }).catch(err=>{
    console.log(err)
    res.sendStatus(400)
  })

})


app.post('/24',(req,res)=>{
  res.json(options);
})

app.listen(3001 )