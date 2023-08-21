const User = require('@model/User');

const getAll = async (req, res) => {
    try {
        const [users] = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Erro na requisição',
            error: error,
        });
    }
};

module.exports = {
    getAll
};