import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
function App() {


  return (
    <>
    <Header></Header>
   <div className='md:flex max-w-5xl mx-10'>
   <Blogs></Blogs>
   </div>
    </>
  )
}

export default App