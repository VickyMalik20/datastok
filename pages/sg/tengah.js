import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Head from 'next/head'
import { useSgTengah } from '../../lib/sg_tengah';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import { mutate } from 'swr'
import Moment from 'react-moment'
import moment from 'moment'
import { ExportReactCSV } from '../../components/admin/ExportReactCSV';
import Header from '../../components/Header';


const Kas = () => {
    const { data, error } = useSgTengah()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    }

    async function hapusTransaksi(id) {
        console.log(id)
        confirm('data yang dihapus tidak bisa dikembalikan')
        let res = await fetch(`/api/sg_tengah/hapus?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/sg_tengah/hapus')
        alert('Transaksi telah dihapus')
        Router.push('/sg/tengah')

    }

    return (
        <>
            <Head>
                <title>Stok SG Tengah</title>
                <link rel="icon" href="/lg.png" />
            </Head>

            <Header />

            <div className='mt-2'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Stok SG Tengah</em></h3>
                </div>
            </div>

            <div className='container kas' >

                <div className='row mt-4'>
                    <div className='col-md-4 mt-2'>
                        <div className='card-wraper p-4'>
                            <div className='icon-wrapper-IN mb-1'>
                                <i className="bi bi-arrow-down-circle-fill"></i>
                            </div>
                            <span className='title-sm'>Masuk</span>
                            <h3 className='fw-bold'>{data.totalIN}</h3>
                            {/* <div>
                                <span className='title-sm text-ungu fw-bold'>{data.in.length}</span><span className='title-sm'> Transaksi</span>
                            </div> */}
                        </div>
                    </div>

                    <div className='col-md-4 mt-2'>
                        <div className='card-wraper p-4'>
                            <div className='icon-wrapper-OUT mb-1'>
                                <i className="bi bi-arrow-up-circle-fill"></i>
                            </div>
                            <span className='title-sm'>Keluar</span>
                            <h3 className='fw-bold'>{data.totalOut} </h3>
                            {/* <div>
                                <span className='title-sm text-ungu fw-bold'>{data.out.length}</span><span className='title-sm'> Transaksi</span>
                            </div> */}
                        </div>
                    </div>

                    <div className='col-md-4 mt-2'>
                        <div className='card-wraper p-4'>
                            <div className='icon-wrapper-IN text-green bg-green mb-1'>
                                <i className="bi bi-wallet2"></i>
                            </div>
                            <span className='title-sm'>Stok Tersisa</span>
                            <h3 className='fw-bold'>{data.totalIN - data.totalOut}</h3>
                            {/* <div>
                                <span className='title-sm text-ungu fw-bold'>{data.data.length}</span><span className='title-sm'> Transaksi</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className='card-20'>

                    <div className="card-container" >
                        <div className='d-flex justify-content-between mb-3'>
                            <h2 className='text-black'>Transaksi</h2>
                            <div className='d-flex gap-3'>
                                <TransactionModal />
                                <ExportReactCSV csvData={data.data} fileName='Report Pemasukan dan pengeluaran kas' />
                            </div>
                        </div>
                        <div className='table-responsive'>
                            <table className="table">
                                <thead>
                                    <tr className='text-center' style={{ backgroundColor: '#97D2EC' }}>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">Transaski</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Deskripsi</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.map((d) => {
                                        return (
                                            <tr className='text-center' style={{ backgroundColor: '#FEF5AC' }} key={d.id}>
                                                <td>
                                                    <Moment format="DD/MM/YYYY">
                                                        {d.Tanggal}
                                                    </Moment>
                                                </td>
                                                <td
                                                    className={d.Transaksi == 'IN' ? 'text-success' : 'text-danger'}>
                                                    {d.Transaksi}
                                                </td>
                                                <td>{d.Quantity}</td>
                                                <td>{d.Description}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => hapusTransaksi(d.id)}>Hapus</button>
                                                    <KasUpdate data={d} /></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

function TransactionModal() {
    const [show, setShow] = useState(false);
    const [tanggal, setTanggal] = useState('');
    const [quantity, setQuantity] = useState('');
    const [transaksi, setTransaksi] = useState('');
    const [description, setDescription] = useState('');

    const handleClose = () => {
        setShow(false);
        setTanggal('');
        setQuantity('');
        setTransaksi('');
        setDescription('');
    };

    const handleShow = () => setShow(true);

    async function submitHandler(e) {
        e.preventDefault();

        // Validasi input
        if (!tanggal || !quantity || !transaksi || !description) {
            alert('Form wajib diisi semua');
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/sg_tengah/input", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tanggal,
                    quantity,
                    transaksi,
                    description
                }),
            });

            const json = await res.json();

            if (!res.ok) throw new Error(json.message);

            alert('Transaksi ditambahkan');
            Router.push('/sg/tengah');
            handleClose();
        } catch (e) {
            console.error('Submission error:', e);
            alert('Terjadi kesalahan saat menambahkan transaksi');
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Transaksi
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaksi SG Tengah</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTanggal">
                            <Form.Label>Tanggal</Form.Label>
                            <Form.Control
                                type="date"
                                value={tanggal}
                                onChange={(e) => setTanggal(e.target.value)}
                            />
                        </Form.Group>
                        <div className='d-flex gap-4 mb-4'>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="transaksi"
                                    value="IN"
                                    checked={transaksi === 'IN'}
                                    onChange={(e) => setTransaksi(e.target.value)}
                                />
                                <label className="form-check-label">Barang Masuk</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="transaksi"
                                    value="OUT"
                                    checked={transaksi === 'OUT'}
                                    onChange={(e) => setTransaksi(e.target.value)}
                                />
                                <label className="form-check-label">Barang Keluar</label>
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <button className='btn btn-primary' type='submit'>Submit</button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

function KasUpdate(props) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [quantity, setQuantity] = useState('')
    const [transaksi, setTransaksi] = useState('')
    const [description, setDescription] = useState('')

    const handleClose = () => {
        setShow(false)
        setTanggal('')
        setQuantity('')
        setTransaksi('')
        setDescription('')
    };
    const handleShow = () => {
        setShow(true)
        setTanggal(moment(props.data.Tanggal).format('YYYY-MM-DD'))
        setQuantity(props.data.Quantity)
        setTransaksi(props.data.Transaksi)
        setId(props.data.id)
        setDescription(props.data.Description)

    };

    async function submitHandler(e) {
        e.preventDefault()
        if (!tanggal || !quantity || !transaksi || !description) {
            alert('Form wajib diisi semua');
            return;
        }


        try {
            const res = await fetch('/api/sg_tengah/update', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    tanggal,
                    quantity,
                    transaksi,
                    description
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Update data sukses")
            Router.push('/sg/tengah')
            handleClose()
        } catch (e) {
            alert(`Error: ${e.message}`);
        }

    }

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Transaksi</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3 text-black"
                            controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                name="nominal"
                                value={quantity}
                                onChange={(e) => { setQuantity(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-black"
                            controlId="formBasicEmail">
                            <Form.Label>Tanggal</Form.Label>
                            <Form.Control
                                type="date"
                                name="tanggal"
                                value={tanggal}
                                onChange={(e) => { setTanggal(e.target.value) }}

                            />
                        </Form.Group>

                        <div className='d-flex gap-4 mb-4'>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="transaksi"
                                    value="IN"
                                    onChange={(e) => { setTransaksi(e.target.value) }}
                                    defaultChecked={transaksi == 'IN' ? true : false}
                                />
                                <label className="form-check-label text-black" >
                                    Barang Masuk
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="transaksi"
                                    value="OUT"
                                    onChange={(e) => { setTransaksi(e.target.value) }}
                                    defaultChecked={transaksi == 'OUT' ? true : false}
                                />
                                <label className="form-check-label text-black">
                                    Barang Keluar
                                </label>
                            </div>


                        </div>
                        <Form.Group className="mb-3 text-black"
                            controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                        </Form.Group>
                        <button
                            className='btn btn-primary'
                            type='submit'>submit</button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Kas