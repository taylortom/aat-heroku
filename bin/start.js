const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

if(port) {
  process.env.ADAPT_AUTHORING_SERVER__port = Number(port);
}
if(uri) {
  const [userDetails,rest] = uri.slice(10).split('@');
  const [username,password] = userDetails.split(':');
  const [hostDetails,dbname] = rest.split('/');
  const [host,dbPort] = hostDetails.split(':');
  process.env.ADAPT_AUTHORING_MONGODB__username = username;
  process.env.ADAPT_AUTHORING_MONGODB__password = password;
  process.env.ADAPT_AUTHORING_MONGODB__host = host;
  process.env.ADAPT_AUTHORING_MONGODB__port = Number(dbPort);
  process.env.ADAPT_AUTHORING_MONGODB__dbname = dbname;
}
require('adapt-authoring-core').App.instance;