//  import logo from './logo.svg'

   import './App.css'

   import React, { useEffect, useState } from 'react'

   import Header from './components/header'

   import Form from './components/form'

   import List from './components/list'

   import Footer from './components/footer'
   

function App() {

  // const [title, setTitle] =  useState('')

  // const [content, setContent] = useState('')



  // const changeTitle = (event) => {


  //   setTitle(event.target.value)
  // }


  
  // const changeContent = (event) => {


  //   setContent(event.target.value)
  // }

const [list, setlist] = useState(localStorage.list ? JSON.parse(localStorage.list) : []);

// (localStorage.list ? JSON.parse(localStorage.list) : [])

     useEffect(() => {

    localStorage.list = JSON.stringify(list);

  //  //  localStorage.setItem('list',JSON.stringify(list));

     }, [list]);

   const addNoteToList = (note) => {

   setlist([...list,note]);

   // console.log(list);

  };

const deleteNoteFromList = (index)  => {

  const newArr = list.filter((item, idx) => (index !== idx));

  setlist(newArr);


}

  return ( <React.Fragment>


   <Header />


   <Form addNoteToList = {addNoteToList} />


   <List List = {list} deleteNoteFromList = {deleteNoteFromList} />

   <Footer />  
    
  </React.Fragment> )
 
}


export default App;
