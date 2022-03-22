const dotenv = require("dotenv");
const SpotifyWebApi = require("spotify-web-api-node");
dotenv.config({ path: "./config.env" });

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.ClientID,
  clientSecret: process.env.ClientSecret,
});

module.exports.getToken = function () {
  console.log(spotifyApi);

  spotifyApi.clientCredentialsGrant().then((data) => {
    spotifyApi.setAccessToken(data.body["access_token"]);
    var token = data.body["access_token"];
    return token;
  });

  setTimeout(() => {
    console.log(spotifyApi);
  }, 1000);
};

module.exports.getArtists = function () {
  spotifyApi.getAccessToken();
  console.log(spotifyApi);

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

//node -e "require('./test.js').test()"
