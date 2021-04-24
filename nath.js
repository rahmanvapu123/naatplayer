var files = [
    "https://naataudio.com/downloads/random/Asma-ul-Husna%20Names%20of%20Allah.mp3",  ///asmul husna
    "https://www.naataudio.com/downloads/random/HasbiRabbiJallallah.mp3",//hasbi rabbi jallallah
    "https://www.naataudio.com/downloads/random/Mawla%20Ya%20Salli%20Wasallim.mp3",  //maula ya salli arabic 
    "https://naataudio.com/downloads/JunaidJamshed/Mere%20Nabi%20Piayare%20Nabi.MP3", //mere pyare nabi
    "https://naataudio.com/downloads/Sheikh%20Mishary%20Rashid/Rehman%20Ya%20Rehman.mp3",  // rehman ye rehman arabic
    "https://naataudio.com/downloads/JunaidJamshed/Main%20Tu%20Ummati%20Hoon.mp3",  //main to ummati hoon junaid jamshed
    "https://naataudio.com/downloads/JunaidJamshed/muhammad-ka-roza.mp3", //mohammed ka roza
    "https://naataudio.com/downloads/random/Ya%20Taiba%20Arabic%20Naat.mp3", //ya taiba ya taiba
    "https://naataudio.com/downloads/JunaidJamshed/duniya-ka-musafir.MP3", //duniya ke ae musafir
    "https://naataudio.com/downloads/random/MUHAMMAD%20(S.A.W)%20NABIYNA%20-%20Arabic%20Naat.mp3", //mohammed nabi na arabic
    "https://naataudio.com/downloads/SarwarNaqshbandi/Labbayk%20Allah%20Labbayk%20Allah%20-%20Sarwar%20Hussain%20Naqshbandi.mp3", //Labaik Allah Labaik Allah
    "https://www.naataudio.com/downloads/owaisRazaQadri/Allah%20Hu%20Allah%20Hu-%20Owais%20Raza%20Qadri.mp3",// allah hu allah hu
    "https://www.naataudio.com/freeIslamicAudios/MominaMustehsannewnaat2017.mp3", //maula ya salli momina
    "https://www.naataudio.com/UserFiles/1506335988/audio_1507124687.mp3",  ///shah e madina
    "https://www.naataudio.com/downloads/owaisRazaQadri/Main%20Madine%20Chala%20Main%20Madine%20Chala.mp3", //main madine chala 
    "https://www.naataudio.com/downloads/random/Subhan-Allah-Subhan-Allah.mp3", //   subhanallah
    "https://www.naataudio.com/UserFiles/1571118018/audio1581669416.mp3",  // ya khuda tujh se meri dua hai
    "https://www.naataudio.com/downloads/random/Best-Durood-O-Salaam-Ya-Nabi-Salam-Alaika.mp3"//durood o salaam ya nabi
];   

var i=0;
var music_player = document.querySelector("#music_list audio");

function player(i){
    music_player.src = files[i];
}


var duas = [
    "https://www.naataudio.com/UserFiles/1571118018/audio1581677530.mp3", //Dua By Shiekh Abdul Rehman Al Ossi
    "https://www.naataudio.com/UserFiles/1591225676/audio1591233929.mp3", //Cure for all problems
    "https://www.naataudio.com/MasnoonDuain/IyadatKarneKiDua.mp3",//Dua For Visting the Sick 
    "http://www.naataudio.com/MasnoonDuain/ramadan-dua-urdu.mp3",//Ramazan Dua in Urdu 
    "http://www.naataudio.com/MasnoonDuain/ramadan-dua.mp3",//Ramadan Dua In Arabic 
    "https://www.naataudio.com/MasnoonDuain/Duas-for-Sorrow.mp3",//Dua for Stress Worry and Grief
    "https://www.naataudio.com/MasnoonDuain/NayaChandDekhnayKiDua.mp3",//Dua For Sighting New Moon With Urdu Translation
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    "https://www.naataudio.com/downloads/MulanaTariqJameel/Ramadan-Ki-Sabse-Badi-Tayari.mp3",//Ramzan Ki Tayari Kaise Karen Latest Bayan by Maulana Tariq Jameel
    "https://www.naataudio.com/downloads/MulanaTariqJameel/Tahajjud-Ka-Tariqa-Nabi-Se-Saabit-Short-Bayan.mp3",//Tahajjud Ka Tariqa Nabi SAWW Sy Saabit Urdu Bayan by Maulana Tariq Jameel
    "https://www.naataudio.com/UserFiles/1571118018/audio1580372909.mp3",//Mangna Hai to Allah Se Mango Beautiful Bayan By Maulana Tariq Jameel
    "https://www.naataudio.com/UserFiles/1571118018/audio1580113500.mp3",//Jannat Ki Baharain Beautiful Bayan by Maulana Tariq Jameel
    "https://www.naataudio.com/UserFiles/1571118018/audio1580376045.mp3",//Emotional Heart Touching Bayan by Maulana Tariq Jameel
    "https://www.naataudio.com/UserFiles/1571118018/audio1580376162.mp3",//Beautiful Bayan by Maulana Tariq Jameel
    "https://www.naataudio.com/UserFiles/1562550355/audio1591402077.mp3",//Mah e Ramzan Ki Shaan Beautiful Bayan by Saqib Raza Mustafai
    "https://www.naataudio.com/downloads/IsrarAhmad/Aurat-ka-Parda.mp3",// Aurat Ka Pardain Islam Bayan by Dr Israr Ahmad
    "https://www.naataudio.com/UserFiles/1533335339/audio_1539288962.mp3"//Qayamat Ke Din Hisab Kon Ly Ga Bayan by Maulana Tariq Jameel
];

var j = 0;
var dua_player = document.querySelector("#music_list audio");

function dua(j){
    dua_player.src = duas[j];
}