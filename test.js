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
    });
    fs.appendFile("token.txt", token, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    res.status(201).json({
      status: "success",
    });
  });
};

module.exports.getArtists = function (req, res, next) {
  fs.readFile("token.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var token = data;
    console.log(token);
    spotifyApi.setAccessToken(token);
    setTimeout(() => {
      spotifyApi
        .getArtist("5aIqB5nVVvmFsvSdExz408")
        .then(function (data) {
          console.log(data);
          res.status(201).json({
            status: data.body.name,
          });
        })
        .catch((error) => {
          console.log(
            "Something went wrong when retrieving an access token",
            error
          );
        });
    }, 1000);
  });
};

module.exports.search = function (req, res, next) {
  fs.readFile("token.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var token = data;
    console.log(token);
    spotifyApi.setAccessToken(token);
    setTimeout(() => {
      spotifyApi
        .searchTracks(req.body.search)
        .then(function (data) {
          console.log(data);
          var response = data.body.tracks.items;
          res.status(201).json({
            status: response,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  });
};
