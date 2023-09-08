import React from 'react'
import { useLocation } from 'react-router'
import { PJDetail } from '../components'

const ProjectDetail = () => {
    const location = useLocation().pathname.split('/')
    
    const detailId = location[location.length - 1]

    return (
        <PJDetail detailId={detailId} />
    )
}

export default ProjectDetail