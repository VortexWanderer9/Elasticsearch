import { useState } from 'react'
import './App.css'
import Product from './Product'

const ProductList = ({search}) =>{
 return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
{search ? Product.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
          <div key={item.id} className="border p-3 rounded shadow">
  <span className='bg-fuchsia-700 rounded px-1 font-bold'>{item.category}</span>   
           <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2"/>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <p className="text-sm text-gray-500">Rating: {item.rating}</p>
          </div>
        )) : Product.map((item) => (
          <div key={item.id} className="border p-3 rounded shadow">
            <span className='bg-fuchsia-700 rounded px-1 font-bold'>{item.category}</span>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2"/>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <p className="text-sm text-gray-500">Rating: {item.rating}</p>
          </div>
        ))}
    </div>
    </>
  )
}




const Search = ({search, setSearch}) =>{

  return (
    <>
    <div className='flex justify-center'>
      <div className='w-full'>
        <input 
        type="text"
        placeholder='Enter Item name'
        className='outline-none bg-fuchsia-700 rounded w-full py-2 px-2'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
   
    </>
  )
}
function App() {
    const [search, setSearch] = useState("")
  return (
    <>
   <div className='p-5'>
    <Search  search={search} setSearch={setSearch} />
    <ProductList search={search} />
   </div>
   
    </>
  )
}

export default App
