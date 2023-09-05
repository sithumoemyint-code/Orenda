import { Route, Routes } from "react-router"
import {About, Home} from "./screens"
import {PageNotFound} from "./page"

function RoutesList() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound /> } />
        </Routes>
    )
}

export default RoutesList
