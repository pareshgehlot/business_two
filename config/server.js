const server_object = {
  server_ip: process.env.SERVER_IP || "127.0.0.1",
  server_port: process.env.PORT || 5000
};
module.exports = server_object;
