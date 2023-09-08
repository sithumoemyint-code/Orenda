import { Route, Routes } from "react-router"
import {About, AboutUs, Careers, ContactUs, Home, News, Products, ProjectDetail, Projects} from "./screens"
import {PageNotFound} from "./page"

function RoutesList() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products /> } />
            <Route path="projects" element={<Projects /> } />
            <Route path="aboutUs" element={<AboutUs /> } />
            <Route path="news" element={<News /> } />
            <Route path="careers" element={<Careers /> } />
            <Route path="contactUs" element={<ContactUs /> } />
            <Route path="projectDetail/:id" element={<ProjectDetail />} />
            <Route path="*" element={<PageNotFound /> } />
        </Routes>
    )
}

export default RoutesList
