const User = require('../Models/User');


const query1 = (req, res, next) => {
    const query = User.find()
        .exec()
        .then(users => {
            console.log(query);
            res.status(200).json(users);
        })
        .catch(err => {
            next(err);
        });
}

const query2 = async (req, res, next) => {
    try {
        /* const query = User.find();
        const users = await query.exec(); */

        /* const users = await User
            .where('password').equals("hashed_password")
            .nor({ hobbies: ['unknown', 'swimming'] })
            .where('posts').size(2)
            .select()
            .exec(); */

        /* const users = await User.find()
            .where('age').gte(18)
            .where('username').in(['Elia', 'Julian', 'Mary'])
            .select('username age -_id')
            .exec(); */

        /* const users = await User.find({
                age: { $gte: 18 },
                username: { $in: ['Elia', 'Julian', 'Mary'] },
            }, { username: 1, age: 1, _id: 0 }); */


        res.status(200).json(users);
        console.log(users);
    } catch (err) {
        next(err);
    }
}

module.exports = { query1, query2 };