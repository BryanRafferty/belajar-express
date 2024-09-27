const express = require ("express") //impor modul express
const app = express()//inisialisasi express
const port = 3002 //port

app.set('view engine', 'ejs');
//route /
app.get("/",(req,res)=>{
    ///res.send("Hello");
    // res.sendFile(__dirname + "/home.html");
    const berita = [
        {
            judul: "Berita 1",
            isi: "Isi berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi berita 2"
        },
    ];
    res.render('home',{title : 'Halaman home',berita});
});

app.get("/prodi",(req,res)=>{
    ///res.send("Hello");
    // res.sendFile(__dirname + "/home.html");
    const prodi = [
        {
            namaProdi: "Sistem Informasi",
            fakultas: "FIKR",
            singkatan: "SI"
        
        },
        {
            namaProdi: "Informatika",
            fakultas: "FIKR",
            singkatan: "IF"
        
        },
        {
            namaProdi: "Teknik Elektro",
            fakultas: "FIKR",
            singkatan: "TE"
        
        },
        {
            namaProdi: "Manajemen Informatika",
            fakultas: "FIKR",
            singkatan: "MI"
        
        },
        {
            namaProdi: "Manajemen",
            fakultas: "FEB",
            singkatan: "MJ"
        
        },
        {
            namaProdi: "Akutansi",
            fakultas: "FEB",
            singkatan: "AK"
        
        }
    ];
    res.render('prodi',{title : 'Halaman prodi',prodi});
});

//route /about
app.get("/about", (req,res)=>{
    // res.send("About us");
    // res.sendFile(__dirname + "/About.html");
    res.render('about',{title : 'Halaman home'});
});
    
//route /contact
app.get("/contact", (req,res)=>{
    ///res.send("contact us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title : 'Halaman contact'});
});

//route /mahasiswa
app.get("/mahasiswa", (req,res)=>{      
    res.json({
        "status" : "succes",
        "message" : "Data Mahasiswa",
        "data" : [{"npm": 2226240020, "nama": "Bryan"
        },{
            "npm" : 2226240010,
            "nama" : "Niko"
        }]
    })
});

//route /dosen
app.get("/dosen", (req,res)=>{      
    res.json({
        "status" : "succes",
        "message" : "Data Dosen",
        "data" : [
            {"Sistem Informasi" : ["Iis" , "Faris", "Dafid"]},
            {"Informatika" : ["Derry" , "Siska", "Yohannes"]}
    ]
    })
});

//handel route yang tidak terdaftar
app.use("/",(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});

//jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
})


