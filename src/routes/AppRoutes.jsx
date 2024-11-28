import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
import AboutMePage from '../pages/AboutMePage/AboutMePage'
import ContactPage from '../pages/ContactPage/ContactPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import MoreinfoPage from '../pages/MoreinfoPage/MoreinfoPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/moreinfo" element={<MoreinfoPage />} />
        </Routes>
    )
}

export default AppRoutes

