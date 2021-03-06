// MW de autorizacion de accesos HTTP restringidos
exports.loginRequired = function (req, res, next) {
    if (req.session.user) {
        next();
    }
    else {
        res.redirect('/login');
    }
};

exports.roleRequired = function (role) {
    return function (req, res, next) {
        if (req.session.user.role === role) {
            next();
        }
        else {
            /* TODO personaliza error */
            next(new Error('405: Unauthorized'));
        }
    }
};

//Get /login  Formulario de login
exports.new = function (req, res) {
    var errors = req.session.errors || {};
    req.session.errors = {};

    res.render('session/new', {
        errors: errors
    });
};

//POST login hacer el login
exports.create = function (req, res) {

    var login = req.body.login;
    var password = req.body.password;

    var userController = require('./userController');
    userController.autenticar(login, password, function (error, user) {

        if (error) { // si hay error, retornamos mensajes de error de sesion
            req.session.errors = [{
                "message": 'Se ha producido un error:' + error
            }];
            res.redirect("/login");
            return;
        }

        //Crear req.session.user y guardar campos id e email
        //La sesion se define por la existencia de: req.session.user
        req.session.user = {id: user.id, email: user.email, role: user.role};
        res.redirect(req.session.redir.toString()); //redireccion a path anterior a login
    });
};

// DELETE logout , hacer logout
exports.destroy = function (req, res) {
    delete req.session.user;
    res.redirect("/"); // redirect a path anterior a login
}