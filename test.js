const dotenv = require("dotenv");
const fs = require("fs");
const { token } = require("morgan");
const SpotifyWebApi = require("spotify-web-api-node");
const AppError = require("./appError");
dotenv.config({ path: "./config.env" });

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.ClientID,
  clientSecret: process.env.ClientSecret,
  accessToken: process.env.SpotifyToken,
});

module.exports.getArtists = function () {
  fs.readFile("token.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var token = data;
    console.log(token);
  });

  setTimeout(() => {
    spotifyApi
      .getArtist("5aIqB5nVVvmFsvSdExz408")
      .then(function (data) {
        console.log(data);
      })
      .catch((error) => {
        console.log(
          "Something went wrong when retrieving an access token",
          error
        );
      });
  }, 1000);
};

module.exports.test = function () {
  console.log(spotifyApi);

  spotifyApi.clientCredentialsGrant().then((data) => {
    spotifyApi.setAccessToken(data.body["access_token"]);
    var token = data.body["access_token"];
    return token;
  });

  setTimeout(() => {
    spotifyApi
      .getArtist("5aIqB5nVVvmFsvSdExz408")
      .then(function (data) {
        console.log(data);
      })
      .catch((error) => {
        console.log(
          "Something went wrong when retrieving an access token",
          error
        );
      });
  }, 1000);
};

exports.setToken = function (req, res, next) {
  console.log(spotifyApi);

  spotifyApi.clientCredentialsGrant().then((data) => {
    spotifyApi.setAccessToken(data.body["access_token"]);
    var token = data.body["access_token"];
    fs.writeFile("token.txt", "", (err) => {
      if (err) {
        console.error(err);
        return;
      }

      //file written successfully
    });
    fs.appendFile("token.txt", token, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      //file written successfully
    });
    res.status(201).json({
      status: "success",
    });
  });
};

module.exports.readToken = function () {};

//node -e "require('./test.js').test()"
