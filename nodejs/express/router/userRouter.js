const exp = require('express');

const router = exp.Router()

router.post('/reg', (req, res) => {
    //数据接受
    res.send('test ok');
    console.log('test ok');
    //数据处理
    //数据返回

})
module.exports = router;