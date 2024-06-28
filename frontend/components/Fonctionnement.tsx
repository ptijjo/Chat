import React from 'react'
import BoutonFonctionnement from './BoutonFonctionnement'

const Fonctionnement = () => {
    return (
        <>
            <h2>Fonctionnement</h2>

            <BoutonFonctionnement props={{
                numero: 1,
                sens: 'Choix du restaurant'
            }} />

        </ >
    )
}

export default Fonctionnement