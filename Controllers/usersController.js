const UserModel = require('../Models/usersModel')


function create (req, res)  {
    if (!req.body.name ) {
		return res.status(400).send({
			message: 'Required field can not be empty',
		});
	}
	const User = new UserModel({
		name: req.body.name,

	});

	User.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred in User .',
			});
		});
}


function findAll(req, res) {
	UserModel.find()
		.sort({ name: -1 })
		.then((User) => {
			res.status(200).send(User);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error ',
			});
		});
}


function findOne(req, res) {
	UserModel.findById(req.params.id)
		.then((User) => {
			if (!User) {
				return res.status(404).send({
					message: 'User not found with this id  ' + req.params.id,
				});
			}
			res.status(200).send(User);
			console.log(User);
		})
		.catch((err) => {
			return res.status(500).send({
				message: 'Error retrieving product with id ' + req.params.id,
			});
		});
}


function deleteOne(req, res) {
	UserModel.findByIdAndRemove(req.params.id)
		.then((User) => {
			if (!User) {
				return res.status(404).send({
					message: 'User not found ',
				});
			}
			res.send({ message: 'User deleted successfully !' });
		})
		.catch((err) => {
			return res.status(500).send({
				message: 'Could not delete User ',
			});
		});
}




function UpdateUser(req, res) {
	if (!req.body.name) {
		res.status(400).send({
			message: 'required fields cannot be empty',
		});
	}
	UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((product) => {
			if (!product) {
				return res.status(404).send({
					message: 'aucun User found',
				});
			}
			res.status(200).send(product);
		})
		.catch((err) => {
			return res.status(404).send({
				message: ' error while updating the User',
			});
		});
}


module.exports = {
	create: create,
	findAll: findAll,
	findOne: findOne,
	deleteOne: deleteOne,
	UpdateUser: UpdateUser,
};