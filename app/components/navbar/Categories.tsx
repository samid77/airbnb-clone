import React from 'react'
import Container from '../Container'
import CategoryBox from '../CategoryBox';
import {TbBeach} from 'react-icons/tb';
import {GiWindmill} from 'react-icons/gi';
import {MdOutlineVilla} from 'react-icons/md';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern style'
    },
]

const Categories = () => {
  return (
    <Container>
        <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
            {
                categories.map((cat, idx) => (
                    <CategoryBox 
                        key={idx}
                        label={cat.label}
                        description={cat.description}
                        icon={cat.icon}
                    />
                ))
            }
        </div>
    </Container>
  )
}

export default Categories