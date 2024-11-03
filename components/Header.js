import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Navbar brand */}
                    <Link legacyBehavior id='link' href="/">
                        <a className="navbar-brand">

                        </a>
                    </Link>
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon-bar"></span>
                        <span className="navbar-toggler-icon-bar"></span>
                        <span className="navbar-toggler-icon-bar"></span>
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Left links */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" legacyBehavior id='link'>
                                    <a className="nav-link" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-expanded="false">Blambangan Sakti</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><Link href="/blambangan/bs_25" legacyBehavior id='link'>
                                        <a className="dropdown-item" >25Kg</a>
                                    </Link></li>

                                    <li><Link href="/blambangan/bs_10" legacyBehavior id='link'>
                                        <a className="dropdown-item" >10Kg</a>
                                    </Link></li>
                                    <li><Link href="/blambangan/bs_5" legacyBehavior id='link'>
                                        <a className="dropdown-item" >5Kg</a>
                                    </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-expanded="false">Agricola</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><Link href="/agricola/agri_25" legacyBehavior id='link'>
                                        <a className="dropdown-item" >25Kg</a>
                                    </Link></li>
                                    <li><Link href="/agricola/agri_5" legacyBehavior id='link'>
                                        <a className="dropdown-item" >5Kg</a>
                                    </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/beras_polos/beras_polos" legacyBehavior id='link'>
                                    <a className="nav-link" >Stok Beras Polos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/bronir/bronir" legacyBehavior id='link'>
                                    <a className="nav-link" >Stok Bronir</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/reject_menir/reject_menir" legacyBehavior id='link'>
                                    <a className="nav-link" >Stok Reject Menir</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/reject_beras/reject_beras" legacyBehavior id='link'>
                                    <a className="nav-link" >Stok Reject Beras</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/broken/broken" legacyBehavior id='link'>
                                    <a className="nav-link" >Stok Broken</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-expanded="false">Stok SG</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><Link href="/sg/selatan" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Selatan</a>
                                    </Link></li>

                                    <li><Link href="/sg/tengah" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Tengah</a>
                                    </Link></li>
                                    <li><Link href="/sg/utara" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Utara</a>
                                    </Link></li>
                                </ul>
                            </li>
                        </ul>
                        {/* Left links */}
                        {/* Search form */}


                    </div>

                    {/* Collapsible wrapper */}
                </div>

                {/* Container wrapper */}
            </nav>
            {/* Navbar */}


        </>
    )
}

export default Header