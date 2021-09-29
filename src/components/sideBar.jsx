import './sideBar.css'
import React, { useState } from 'react'

const SideBar = () => {
    const [ vocabularies, setVocabularies ] = useState(['파이썬', '자바스크립트', '안녕', '불안', '베르나르베르베르', '황순원']);

    return (
        <div className="sidebar-container">
            <ul>
                {
                    vocabularies.map(vocabulary => (
                        
                        <li>{vocabulary}</li>
                    ))
                }
            </ul>
             {/* search bar */}
             {/* list of vocavularies */}
        </div>
    )
}

export default SideBar
