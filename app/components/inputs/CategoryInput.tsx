'use client'
import React from 'react'
import { IconType } from 'react-icons';

interface CategoryInputProps {
    onClick: (val:string) => void;
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryInput: React.FC<CategoryInputProps> = ({onClick, icon: Icon, label, selected}) => {
  return (
    <div
        onClick={() => onClick(label)} 
        className={`
            rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-rose-500 hover:text-rose-500 transition cursor-pointer
            ${selected ? 'border-rose-500' : 'border-neutral-200'}
            ${selected ? 'text-rose-500' : 'text-black'}
        `}>
        <Icon size={30}/>
        <div className='font-semibold'>
            {label}
        </div>
    </div>
  )
}

export default CategoryInput