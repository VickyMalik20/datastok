import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const KasUser = () => {
  return (
    <>
      <Head>
        <title>UD Sinar Mandiri</title>
        <link rel="icon" href="/lg.png" />
      </Head>

      <Header />

      <div className='banner w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className='container banner-conten col-lg-6'>
          <div className='text-center my-5'>
            <h1><strong>
              UD. SINAR MANDIRI
            </strong>
            </h1>
            <p className='py-3 text-light'>
              Aplikasi ini dirancang untuk memudahkan pengelolaan stok barang secara efisien. Dengan fitur pencatatan pemasukan dan pengeluaran barang, aplikasi ini membantu pengguna dalam memantau ketersediaan stok secara real-time, menghindari kelebihan atau kekurangan stok, serta memastikan pencatatan yang akurat. Cocok digunakan untuk usaha kecil hingga besar dalam menjaga kelancaran rantai pasokan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KasUser;
