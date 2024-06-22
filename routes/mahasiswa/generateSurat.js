const express =require('express')
const router = express.Router()
const controllers = require('../../controllers/mahasiswa/generateSurat')
const middleware = require('../../middleware/authentication')

router.get('/allJenisSurat', middleware.verifyTokenMahasiswa, controllers.allJenisSurat)
router.post('/tambahJenisSurat', middleware.verifyTokenMahasiswa, controllers.tambahSurat)
router.post('/generateSurat/:id_jenis', middleware.verifyTokenMahasiswa, controllers.generateSurat)
router.post('/generatePinjamRuang/:id_jenis', middleware.verifyTokenMahasiswa, controllers.generatePinjamRuang)
router.post('/generatePermohonTA/:id_jenis', middleware.verifyTokenMahasiswa, controllers.generatePermohonTA)
router.get('/dataBarangMhs', middleware.verifyTokenMahasiswa, controllers.allBarang)

module.exports = router
