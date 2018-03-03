var baris = '';
for (var a=0; a<5; a++){
  for (var b=0; b<1; b++){
    baris += '*';
  }
  baris += '\n';
}

console.log(baris);

-------------------------------------------------------------------------------------------------------------------

var baris = '';
for (var a=0; a<5; a++){
  for (var b=0; b<5; b++){
    baris += '*';
  }
  baris += '\n';
}

console.log(baris);
  
--------------------------------------------------------------------------------------------------------------------

var baris = '';
for (var a=0; a<5; a++){
  for (var b=0; b<=a; b++){
    baris += '*';
  }
  baris += '\n';
}

console.log(baris);
  
