var Nama = '';
var peran = '';

if(Nama === ''){
  console.log('Nama harus diisi!');
}else if(peran === 'shinigami') {
  console.log('Selamat Datang di dunia DeathNote ,');
  console.log('Berikan buku DeathNote kepada kira');
  console.log('Halo ' + '('+peran+') ' + Nama);
}else if(peran === 'kira') {
  console.log('selamat Datang di dunia DeathNote ');
  console.log('Kamu adalah pembunuh keadilan');
  console.log('Halo ' + '('+peran+') ' + Nama );
}else if(peran === 'L'){
  console.log('Selamat Datang di dunia DeathNote ');
  console.log('Carilah kira, dan selamatkan dunia!');
  console.log('Halo ' + '('+peran+') ' + Nama );
} 
