import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';


const SearchBarre = () => {
    return (
        <div >
            <Input type='search' />
            <div className='flex flex-col justify-center items-center bg-fond-fonce p-2.5'>
                <h2>Réservez le menu qui vous convient</h2>
                <p className='text-zinc-200'>Découvrez des restaurants d'exception, sélectionné par nos soins.</p>
                <Button className='bg-gradiant rounded-full w-2/3 shadow-lg shadow-gray-500'>Explorer nos restaurants</Button>
            </div>
        </div>
    )
}

export default SearchBarre