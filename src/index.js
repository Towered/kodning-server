const express = require("express");
const chalk = require("chalk");
const app = express();
const config = require("../server.config");
const loadRoute = require("./util/loadRoute");
    
loadRoute( app );
    
app.listen( config.port, function (){
    console.log(chalk.green("kodning server listen on " + config.port));
}); 