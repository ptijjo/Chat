import React from 'react';
import { Button } from './ui/button';

type Props = {
    numero: number,
    sens: string
}

const BoutonFonctionnement = ({ props }: { props: Props }) => {
    return (
        <div className='flex items-center'>
            <p className='bg-slate-500 rounded-full aspect-square w-6 text-center text-white -mx-4 z-50'>{props.numero}</p>
            <Button className='bg-gradiant rounded-full z-0'>{props.sens}</Button>
        </div>
    )
}

export default BoutonFonctionnement