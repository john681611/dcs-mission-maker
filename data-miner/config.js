module.exports = {
  MONGO_URL: "mongodb://admin:admin@127.0.0.1:27017",
  DB_NAME: "me_db",
  FILES: "./tables/*.lua", // Run once per dcs version
  VIEWS: "./views/*.js", // Run once per dcs version
  // FILES: "./tables/{Airbases,Terrains}.lua", // Run once per theatre
  ENVS: {
    MISSION: "http://127.0.0.1:12080/",
    GUI: "http://127.0.0.1:12081/",
  },
};
