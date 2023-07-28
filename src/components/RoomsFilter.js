import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from "../components/Title.js"

const getUnique = (item, value) => {
  return [...new Set(item.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const { type, capacity, price, maxPrice, minPrice, minSize, maxSize, breakfast, pets, handleChange } = context
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((items, index) => {
    return <option value={items} key={index}>{items}</option>
  });
  let capacitys = getUnique(rooms, 'capacity');
  capacitys = [...capacitys];
  capacitys = capacitys.map((items, index) => {
    return <option value={items} key={index}>{items}</option>
  });
  return (
    <section className='filter-container'>
      <Title title="Search roooms" />
      <form className="filter-form">
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select name='type' id='type' value={type} className='form-control' onChange={handleChange}> {types} </select>
        </div>
        <div className='form-group'>
          <label htmlFor='capacity'>Guest's</label>
          <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}> {capacitys} </select>
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Room price :  ${price}</label>
          <input type='range' name='price' id='price' value={price} className='form-control' onChange={handleChange} min={minPrice} max={maxPrice} />
        </div>
        <div className='form-group'>
          <label htmlFor='minSize'>Room size </label>
          <input type='number' name='minSize' id='minSize' value={minSize} className='size-input' onChange={handleChange} placeholder='0' />
          <input type='number' name='maxSize' id='maxSize' value={maxSize} className='size-input' onChange={handleChange} placeholder='1000' />
        </div>
        <div className='form-group'>
          <div className='single-extra'>
            <input type = 'checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange}/>
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input type = 'checkbox' name='pets' id='pets' checked={pets} onChange={handleChange}/>
            <label htmlFor='pets'>Pets</label>
          </div>
        </div>
      </form>
    </section>

  )
}
