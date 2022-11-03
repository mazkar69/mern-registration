import React,{useEffect,useState} from 'react';

const Home = () => {
  const [user,setUser] = useState({flag:0,name:""})

  const getname = async() => { 
     
    const res = await fetch('/home',{
      method:"GET",
      headers:{
        Accept:'application/json',
        "Content-Type":'application/json',
      },
      credentials:'include'
    })

    if(res.status !== 200){
        setUser({
          flag : 0,
          name:""
        })
    }
    else{
      const data = await res.json();
      // console.log(data);
      setUser({
        flag:1,
        name:data.name,
      })


    }
   }

  useEffect(()=>{
    getname();
  },[])
  return (
    <div className='home-page'>
      <div className='home-content'>
        <p>welcome</p>
        {user.flag ? <h1>{user.name} </h1> : <h1>We are the MERN developer</h1>}
        
      </div>
    </div>
  )
}

export default Home;