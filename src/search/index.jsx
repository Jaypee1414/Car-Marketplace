import Header from '@/components/Header'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchItem() {
    const [useSearchParams] = useSearchParams()

    const cars = useSearchParams('cars')
    const model
    const pricing
  return (
    <div>
      <Header/>
    </div>
  )
}

export default SearchItem
