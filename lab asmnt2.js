import React,{useState} from 'react'
import {View,Button } from 'react-native'
//import './App.css'
function App() {
  const [todos,setTodos] = useState([]);
  const [text,setText] = useState('');
  
function handleClick(){
    if(text===''){
      return;
    }
    setTodos([...todos,text]);
    setText('');
  }
  function handleChange(e){
    setText(e.target.value);
  }
  function handleDelete(target){
    let newArr = todos.filter((value,index)=>index!=target);
    setTodos(newArr);
  }
  return (
    <View className="App">
      <input placeholder="Enter your todo" value={text} onChange={handleChange} />
 
      <Button onClick={handleClick}>Add Todo</Button>
      <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h2>Todos:</h2>
        {
          todos.map((value,index)=>{
            return <View style={{display:'flex',justifyContent:'space-between',width:'20%'}} key={index}>
              <h3>{index+1}. {value}</h3>
              <button onClick={()=>handleDelete(index)}>X</button>
            </View>            
          })
        }
      </View>
    </View>
  );
}
export default App