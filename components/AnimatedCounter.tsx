//import React from 'react';
'use client'
import CountUp from 'react-countup'
const AnimatedCounter = ({amount} : {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp
        decimal='.'
        prefix='Kes '
        decimals={2}
        end={amount} />
    </div>
  )
}

export default AnimatedCounter