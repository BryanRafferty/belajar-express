const express = require ("express") //impor modul express
const app = express()//inisialisasi express
const expressLayout = require("express-ejs-layouts");//impor modul express-ejs-layouts
const port = 3002 //port

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(expressLayout);
app.use(express.static('public'));
//route /
app.get("/",(req,res)=>{
    // res.send("Hello");
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
    res.render('home',{title : 'Halaman home',berita, layout: 'main'});
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
    res.render('prodi',{title : 'Halaman prodi', prodi, layout:'main'});
});

//route /about
app.get("/about", (req,res)=>{
    // res.send("About us");
    // res.sendFile(__dirname + "/About.html");
    res.render('about',{title : 'Halaman home', layout:'main'} );
});
    
//route /contact
app.get("/contact", (req,res)=>{
    ///res.send("contact us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title : 'Contact Us', layout:'main'});
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


