---
layout: post
title: Bagaimana Kami Mengelola Akun Firebase Menggunakan Ruby?
category: "ruby"
short_description: Firebase belum menyediakan pustaka (library) untuk mengelola akun di Firebase dalam bahasa Ruby.
image_preview: /images/ruby.png
category_page: rb
---

`Firebase` belum menyediakan pustaka (*library*) untuk mengelola akun di `Firebase` dalam bahasa `Ruby`.
Kami punya ide untuk menangani masalah ini.

Biasanya penerimaan mahasiswa dilakukan melalui proses panjang di UMS (*University Management System*):
Mulai dari pengunggahan berkas-berkas, pemilihan lokasi ujian, melakukan berbagai pembayaran, sampai
akhirnya calon mahasiswa resmi menjadi mahasiswa di universitas mitra. Semua proses dilakukan
secara daring (*online*).

Nah! Salah satu universitas mitra ternyata sudah memiliki daftar mahasiswa (3000-an lebih) melalui
proses manual. Kami perlu memasukkan daftar mahasiswa tersebut ke basis data (*database*) agar mereka bisa
menikmati semua layanan yang disediakan LMS (*Learning Management System*). *VP of Engineering* memutar otak
karena kami sudah terlanjur menggunakan `Ruby on Rails` dari awal dan melakukan migrasi ke `Node.js` sama
saja dengan bunuh diri. Bisa saja kami melakukan pengisian manual secara langsung di Firebase, tapi buat
apa menjadi pengembang web jika masih melakukan pekerjaan repetitif semacam itu? Setelah meminta wejangan
kepada leluhur, akhirnya kami punya solusi yang cukup *nyeleneh*.

Pertama-tama, kami membuat [folder](https://kbbi.web.id/folder) baru dengan nama `nodejs`.

Berikut adalah `package.json` untuk proyek `Node.js` kami.

{% highlight js %}
  {
    "name": "nodejs",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "UMS team",
    "license": "ISC",
    "dependencies": {
      "firebase": "^3.6.10",
      "firebase-admin": "^4.1.1",
      "sleep": "^5.1.0",
      "pg": "^6.1.5",
      "url": "^0.11.0",
    }
  }
{% endhighlight %}

Tidak ada satu pun di tim kami yang punya pengalaman dengan `Node.js`, jadi harap maklum jika kode yang akan
kalian lihat membuat mata perih.

![my eyes](https://i.imgur.com/zzG8J5w.png){:class="blog-post-image"}
<em class="description">My eyes!</em>

Solusi paling masuk akal adalah meminta tim operasional mengimpor daftar mahasiswa tersebut dalam bentuk CSV
ke UMS, kemudian biarkan program berjalan di belakang layar sampai semua mahasiswa
mendapatkan hak akses ke LMS.

Berikut adalah cungkilan dari kode busuk kami yang sama sekali tidak punya keindahan semantik
dan estetika.

Ini modul untuk "membungkus" fungsi-fungsi bawaan `Firebase`:

{% highlight js %}
  // firebase_administrator.js

  function firebaseCreateUser(email, admin) {
    var user = admin.auth().createUser({
      email: String(email).trim(),
      emailVerified: false,
      password: "harukaedu1234567890qwertyuiop[]",
      disabled: false
    });

    return user.then(function(userRecord) {
      console.log("Successfully created new user:", userRecord.uid);
      return userRecord.uid;
    }).catch(function(error) {
      console.log("Email: ", email);
      console.log("Error: ", error.code);
      console.log("Error creating new user:", error);
      return 'failed'
    });
  }

  function firebaseUpdateUser(uid, properties, admin) {
    var user = admin.auth().updateUser(uid, {
      email: properties.email,
      password: properties.password
    });

    return user.then(function (userRecord) {
      return userRecord;
    }).catch(function (error) {
      console.log("Error fetching user data: ", error);
      process.exit();
    });
  }

  function firebaseGetUserUID(email, admin) {
    var user = admin.auth().getUserByEmail(email);

    return user.then(function (userRecord) {
      return userRecord.uid;
    }).catch(function(error) {
      console.log("Error fetching user data: ", error);
      process.exit();
    });
  }

  exports.createUser = firebaseCreateUser;
  exports.updateUser = firebaseUpdateUser;
  exports.getUserUID = firebaseGetUserUID;
{% endhighlight %}

Ini modul untuk mengunggah akun secara masal ke `Firebase`:

{% highlight js %}
  // mass_uploader.js

  var firebase = require('./firebase_administrator');
  var emails = process.argv[2].split(" ");
  var serviceAccount = JSON.parse(process.argv[3]);
  var admin = require("firebase-admin");
  var actions;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  function uploadUsers(email) {
    var user = firebase.createUser(email, admin);

    return user.then(function (uid) {
      console.log(uid);
    }).catch(function (error) {
      console.log("Error creating user", error);
    });
  }

  actions = emails.map(uploadUsers);

  Promise.all(actions).then(function () {
    console.log("Success!");
    process.exit();
  }).catch(function (error) {
    console.log("Failed!");
    process.exit();
  });
{% endhighlight %}

Dari sini, kami memulai menulis kode `Ruby` untuk pembuatan servis yang akan dieksekusi di belakang layar
menggunakan `Sidekiq`. Silahkan baca [dokumentasinya](https://github.com/mperham/sidekiq/wiki){:target="_blank"}
agar lebih jelas.

Sebelum menulis kode, kami memastikan pustaka `execjs` dan `therubyracer` terlampir di konfigurasi `Gemfile`:

![seperti ini](https://i.imgur.com/DSrVPca.png){:class="blog-post-image"}

Kurang lebih seperti ini kodenya:

{% gist miayam/d286dc449dc46f5ccf1cf51a54caaa26 %}

Servis ini akan berjalan setiap tim operasional melakukan pengunggahan. Secara otomatis, `Sidekiq`
akan mendaftarkan proses ini ke antrian sebelum dieksekusi. Ini cukup masuk
akal karena 3000 lebih mahasiswa tidak diunggah dalam 1 dokumen, mereka dibagi
berdasarkan kelas dan mata kuliah yang diambil di semester yang sedang berjalan.

Inilah kode kunci untuk menyelesaikan masalah ini. Kami meminta mesin `linux` untuk menjalankan
skrip `Node.js` dari CLI (*Command-line Interface*), sementara parameter-parameter yang kami butuhkan
dimasukkan secara dinamis—yang berarti tidak ditulis secara langsung di baris perintah.
Berikut adalah solusi kami yang agak jenaka:

{% gist miayam/a1c6fa21c1d793e25a13fbe907134a8a %}

Kami membiarkan `Sidekiq` bekerja sendiri, sementara kami punya waktu untuk bisa bernafas lega:

{% gist miayam/bec52f5d6834719f451c4c7206cf1787 %}

Alhamdulillah, karya busuk kami masih berjalan sampai sekarang meski terdapat banyak kesalahan
di sana-sini.

Kini, ribuan mahasiswa yang sebelumnya sudah terdaftar di universitas mitra bisa
menikmati layanan yang disediakan LMS tanpa perlu melakukan proses penerimaan mahasiswa baru
yang melelahkan. Terima kasih `Node.js`! Terima kasih `Firebase`! Saya pensiun menggunakan `Ruby on Rails`!
