// config.js
//Configuracoes para jwt/passport e banco de dados
module.exports = {
	jwtSecret: "p1cp4y",
	jwtSession: {session: false},

	db: {
	    host: 'localhost',
	    database: 'db_picpay',
	    user: 'root',
	    password: 'picpay123',
	    port: 3306
  	}
};