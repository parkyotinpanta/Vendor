// const vendor = require('../')

// exports.list = async (req, res) => {
//     try {
//         const vendor1 = await vendor.find({}).exec()
//         res.send(vendor1)
//         console.log('hi');
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('List Error')
//     }
// }
// exports.add = async (req, res) => {
//     try {
//         const vendor2 = await vendor(req.body).save()
//         res.send(vendor2)
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('Add Error')
//     }
// }
// exports.view = async (req, res) => {
//     try {
//         // code
//         const name = req.params.name
//         const vendor3 = await vendor.findOne({ _name: name}).exec()
//         res.send(vendor3)
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('View Error')
//     }
// }