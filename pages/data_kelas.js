$(function(){
    $("#data_kelas").DataTable();
});

$("#simpan").click(function(){
    var nama_kelas  =$("#nama_kelas").val();
    var jurusan     =$("#jurusan").val();
    var jmlh_siswa  =$("#jmlh_siswa").val();

    $.ajax({
        url : base_url+"Kelas/tambah_kelas",
        method: "post",
        data: {nama:nama_kelas,jurusan:jurusan,jumlah:jmlh_siswa},
        dataType: "json", //Javascript Object Notation
        error: function(){
            Swal.fire({
                icon: 'error',
                title: 'Sistem bermasalah',
                text: 'Server terdeteksi bermasalah',
              })
        },
        success: function(res){
            Swal.fire({
                icon: 'success',
                title: 'Sistem sukses',
                text: 'res.hasil',
              })
        }
    });
})