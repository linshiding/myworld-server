const startCluster = require('egg-cluster').startCluster;
startCluster({
  port: 7001,
  workers: 4
});