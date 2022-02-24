import React, { useEffect, useState } from 'react'

const fatchListUsers=async()=>{
  const url='https://api.github.com/users?per_page=20';
  const respons=await fetch(url,{
    method:"get",
        headers:{
           'Authorization':'Basic bGliZXJtYW50OmdocF95aUozdVNydExvWkw2OEZsOHRaZFhXaHpldkE1REs0NGNvSmEg',
          'Accept':'application/vnd.github.v3+json'
        }
  })
  const listUsers=await respons.json()
  
  return listUsers
}
let use=fatchListUsers()
console.log(use)

const Users = ({users}) => {
  const[listUsersName,setListUsersName]=useState([])
  useEffect(async()=>{
    const listUsers=await fatchListUsers()
    setListUsersName(listUsers)
  },[])
  return (
    <div>
      {users}
    </div>
  )
}

export  {Users,use}