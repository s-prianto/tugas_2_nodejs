//siswaController.js

//import siswaModel
Siswa = require('./siswaModel');

//handle index actions
exports.index = (req,res) =>{
	Siswa.get((err,siswa_1)=>{
		if(err){
			res.json({
				status : "error",
				message : err,
			});
		}
		res.json({
			status : "success",
			message : "Data Siswa Berhasil Dimunculkan",
			data : siswa_1
		})
	})
}

//handle create siswa actions
exports.new = (req,res)=>{
	var siswa = new Siswa();
	siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
	siswa.tanggallahir = req.body.tanggallahir;
	siswa.jeniskelamin = req.body.jeniskelamin;
	siswa.hobi = req.body.hobi;

	//save the contact and check for eror
	siswa.save((err)=>{
		// if(err)
		// res.json(err)
		res.json({
			message : "New Contact created",
			data : siswa
		});
	});
};

// //handle view info
exports.view = (req,res)=>{
	Siswa.findById(req.params.siswa_id, (err,siswa)=>{
		if(err)
		res.send(err);
		res.json({
			message: "Siswa details loadings",
			data:siswa
		});
	});
};
