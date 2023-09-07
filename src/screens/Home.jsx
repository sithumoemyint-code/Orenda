import React from 'react'
import { Banner, Choose, CustomerService, Happy, OrendaName, Service } from '../components'

const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <Happy />
            <Choose />
            <CustomerService />
            <OrendaName />
        </>
    )
}

export default Home