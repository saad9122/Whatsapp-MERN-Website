import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { SearchBar } from './searchBar/SearchBar'
import { FriendList } from './friendList/FriendList'

export const Menu = () => {

  const [search,setSearch] =useState('')

  return (
    <div>
      <Header />
      <SearchBar setSearch = {setSearch} />
      <FriendList search = {search}/>
    </div>
  )
}