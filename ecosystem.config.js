module.exports = {
  apps: [{
    name: "jabonline",
    script: "./dist/server/main.js",
    cron_restart: "* */3 * * *"
  }]
}