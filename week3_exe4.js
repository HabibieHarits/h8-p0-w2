function dataHandling2(input){
  
  input.splice(1,2);
  input.splice(1,0, 'Roman Alamsyah Elsharawy');
  input.splice(2,0);
  input.splice(2,0, 'Provinsi Bandar Lampung');
  input.splice(4,0, 'Pria');
  input.splice(5,1);
  input.splice(5,0, 'SMA Internasional Metro');
  console.log(input);
  console.log('\n');
  
  var tanggal = input[3];
  
  console.log(tanggal)

  Pisah_Tanggal = tanggal.split('/');
  console.log(Pisah_Tanggal)

  potong_Tanggal = Pisah_Tanggal[1];
  tanggal_lahir = parseInt(potong_Tanggal);
  
  var Bulan;
  
  switch(tanggal_lahir){
    case 1: {Bulan=('Januari');break;}
    case 2: {Bulan=('Februari');break;}
    case 3: {Bulan=('Maret');break;}
    case 4: {Bulan=('April');break;}
    case 5: {Bulan=('Mei');break;}
    case 6: {Bulan=('Juni');break;}
    case 7: {Bulan=('Juli');break;}
    case 8: {Bulan=('Agustus');break;}
    case 9: {Bulan=('September');break;}
    case 10: {Bulan=('Oktober');break;}
    case 11: {Bulan=('November');break;}
    case 12: {Bulan=('Desember');break;}
  }
  console.log(Bulan);
  console.log();
  
  urutkan_Tanggal = Pisah_Tanggal.sort(function(a, b) { 
    return b - a; 
    
  });
  console.log(Pisah_Tanggal);
  console.log();
  
  ubahTanggal = tanggal.split('/').join('-');
  console.log(ubahTanggal);  
  console.log();

  
  input.splice(1,2);
  input.splice(1,0, 'Roman Alamsyah');
  console.log(input[1]);
    console.log();


}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/06/1989", "Membaca"]));
