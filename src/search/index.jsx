import Header from '@/components/Header'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchItem() {
    const [searchParams] = useSearchParams()

    const cars = searchParams.get('cars')
    const model = searchParams.get('model')
    const pricing = searchParams.get('price')
    
  return (
    <div>
      <Header/>
    </div>
  )
}

export default SearchItem
