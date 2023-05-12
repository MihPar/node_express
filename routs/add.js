const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить',
        isAdd: true
    })
})

router.post('/', function(req, res) {
    console.log(req.body)

    res.redirect('/courses')
})

module.exports = router