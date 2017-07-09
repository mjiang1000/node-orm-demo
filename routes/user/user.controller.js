
const User = global.Models.user
const Editor = global.Models.Editor
exports.addUser = (req, res) => {
  User.create({
  	username:'abc',
  	password:'def'
  }).then((data) => {
  	console.log(data)
  	return res.status(200).send({
  	  token: data
    })
  }).catch((err) => {
  	return res.status(401).send({err: err})
  })
  
}