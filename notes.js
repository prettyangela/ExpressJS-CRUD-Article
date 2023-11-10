/*

## Structure Folder Back End ##
- Public ( File yang dapat diakses oleh user bebas )
- Views ( Semua file yang berhubungan dengan front end )
- Controllers ( Semua file yang berhubungan dengan proses yang terjadi ) 
    - proses ngambil data, diolah, ditampilkan, proses penyaringan request
    - Proses untuk menampilkan atau menerima data dari dan untuk client
- Models ( Semua file yang berhubungan dengan yang namanya database )
    - Connection Database
    - Create, Read, Update, Delete Database ( secara langsung ke database )
    - Dan lainnya
- Routes ( Semua file yang berhubungan dengan yang namanya gateway / pintu gerbang )
    - Pintu gerbang menuju proses yang ada ( biasanya masuk ke controllers )
- Middlewares ( Semua file yang berhubungan dengan proses dibelakang layar )


## Example Step Create Register Acccount ##
    == Client Side ==
        1. Input nama, email, password
        2. Validasi Password & Email
        3. Create Packet Data To API
            - Set URL ( link url )
            - Set Method ( get / post )
            - Set Headers ( Content-Type & etc )
            - Set Data ( body data )
        4. Send API ( mockapi or etc )

    == Server Side ==
        1. Request Masuk ke Dalam Routes


## To Do Backend ##
1. Create Folder Structure
2. Create Server.js setup
3. Create Routes Setup
4. Create Controllers

req/request = ngambil data yang diberikan oleh client
res/respon =  ngasih data dari kita ke client
next = mirip async, skip ke code lain klo ada yg nunggu


== Apa Saja Yang Bisa Dilakukan Oleh Function Middleware? ==
Menjalankan kode apapun.
Memodifikasi Object Request dan Object Response.
Menghentikan request-response cycle.
Melanjutkan ke middleware function selanjutnya atau ke handler function dalam suatu request response cycle.



*/
