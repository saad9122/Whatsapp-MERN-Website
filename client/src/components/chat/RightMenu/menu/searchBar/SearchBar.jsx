import React, { useRef, useState } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, updateSearchTerm } from '../../../../../redux/slices/friendListSlice';
import CloseIcon from '@mui/icons-material/Close';

export const SearchBar = () => {

    const selectInput = useRef();

    const searchTerm = useSelector(selectSearchTerm)

    const [isFocus,setisFocus] = useState(true)

    const dispatch = useDispatch()

    const handleSearch = (e) => {

        dispatch(updateSearchTerm(e.target.value))
    }

    const handleClearSearch = () => [
        dispatch(updateSearchTerm(""))
    ]
    const focusInput = () => {
        selectInput.current.focus()
}
const handleFocus = () => {
    setisFocus(true)
}

const handleBlur = () => {
    setisFocus(false)
}



  return (
    <div className='bg-white border-b-[0.4px] h-[47px] py-[6px] px-3 flex space-x-1 z-[1000]'>
        <div className='bg-custom-gray h-full rounded-lg w-11/12 flex justify-center items-center cursor-pointer'>
            <div className='w-1/12 px-3 flex justify-start items-center'
            onClick={focusInput}
            >
                 {!isFocus? <SearchIcon fontSize='small'/> : <ArrowBackIcon fontSize='small'/>} 
            </div>
            <div className='w-11/12 px-4 flex text-sm'>
                <input type="text"  placeholder='Search or Start a new Chat' className='w-full bg-transparent outline-none' 
                ref={selectInput} onFocus={handleFocus} onBlur={handleBlur} value={searchTerm} 
                onChange={handleSearch}
                />

                {searchTerm !== "" &&<button
                onClick={handleClearSearch}
                >  <CloseIcon/> </button>}
                
            </div>
        </div>
        
        <div className='flex justify-center items-center w-1/12'>
            <FilterListIcon fontSize='small'/>
        </div>
    </div>
  )
}
