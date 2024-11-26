# Microservice
Microservice dibangun menggunakan `nodejs - express` untuk menangani data user yang simpan ke dalam database `mongoDB` dan output yang diterima berupa object user(API), berikut bentuk dari data user yang dibuat:

    - Id : key dari data user(akan digenerate langsung oleh DB)
    - userName: nama dari user
    - accountNumber: nomor akun user
    - emailAddress: alamat email user(bersifat unik)
    - identityNumber: nomor identitas dari user(bersifat unik)

## Perangkat yang diperlukan untuk menjalankan aplikasi ini
Perangkat yang digunakan untuk menjalankan aplikasi sudah terlihat pada paragraf sebelumnya, berikut detailnya:

    - node js: perangkat yang membangun web server  
    - mongoDB: media penyimpanan data user
    - redis: cache data user(media penyimpanan memory)


## Penggunaan
Setelah perangkat yang dibutuhkan tersedia, anda perlu mengatur property dari mongoDB dan redis pada file `.env`(anda cukup mengubah host dan port sesuai dengan pengaturan perangkat anda).

Jalankan CLI dengan mengetikan `npm start`(asumsi anda sudah berada difolder aplikasi)

**Note: khusus untuk database, anda tidak perlu membuat database baru dalam mongoDB. Database akan dibuat secara otomatis saat menjalankan aplikasi pertama kali**

## API yang tersedia didalam aplikasi
Proses cache redis akan diatur pada setiap permintaan API yang tersedia 

### get all 
`http://localhost:3000/users/` 
method `GET`, mendapatkan list data user. Pada saat permintaan pertama, data diperoleh langsung dari database dan cache redis dibuat. Lalu untuk permintaan kedua dan seterusnya, data diambil melalui cache redis.

### get by id
`http://localhost:3000/users/{id}/id`
method `GET`, mendapatkan data user berdasarkan id({id} diganti dengan id yang dicari)

### get by accountNumber
`http://localhost:3000/users/{accountNumber}/accountNumber` 
method `GET`, mendapatkan data user berdasarkan accountNumber({accountNumber} diganti dengan accountNumber yang dicari)

### get by identityNumber
`http://localhost:3000/users/{identityNumber}/identityNumber` 
method `GET`, mendapatkan data user berdasarkan identityNumber({identityNumber} diganti dengan identityNumber yang dicari)

### save
`http://localhost:3000/users` 
method `POST`, menyimpan data user dan cache redis dihapus

body: 

```json
{
    "userName": "name", 
    "accountNumber": 0,
    "emailAddress": "email", 
    "identityNumber": 0
}

```

### update
`http://localhost:3000/users/{id}` 
method `PUT` memperbarui data user berdasarkan id({id} diganti dengan id yang diperbarui) dan cache redis dihapus

body: 

```json
{
    "userName": "name", 
    "accountNumber": 0,
    "emailAddress": "email", 
    "identityNumber": 0
}

```

### delete
`http://localhost:3000/users/{id}` 
method `DELETE` menghapus data user berdasarkan id({id} diganti dengan id yang dihapus) dan cache redis dihapus


@wan
