// config file for back-end deployment using pm2
module.exports = {
  apps: [{
      name: "wh-api",
      script: "./dist/apps/api/main.js"
  }]
}