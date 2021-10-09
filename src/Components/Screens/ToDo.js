import React,{ useState } from 'react'
import DeleteIcon from "../../assets/images/delete.svg"
import RevertIcon from "../../assets/images/revert.svg"
import Tickgreen from "../../assets/images/tick-green.svg"


export default function ToDo() {
    const [items, setItems] = useState([
        {
            id: 1,
            name:"Buy 1 kg Tomato"
        },
        {
            id: 2,
            name:"Buy 2 kg Onion"
        },
        {
            id: 3,
            name:"Visit Freind"
        },
        {
            id: 4,
            name:"Clean house"
        }
    ]);
    const [Comp, setComp] = useState([
        {
            id:5,
            name:"washing clothes"
        },
        {
            id:6,
            name:"Play cricket"
        },
        {
            id:7,
            name:"1km walking"
        },
        {
            id:8,
            name:"do homework"
        }
    ])
    const [input, setInput] = useState("");
    let addItems =() =>{
        setItems([...items,{name:input, id: items.length+1}])
        setInput("")
    }
    const removeItem=(id) => {
        let removeditem= items.filter((item) => item.id!==id);
        console.log(removeditem);
        setItems(removeditem)
    }
    const completedItems=(id) => {
        let completeItems= items.find((item) => item.id===id );
        let deletedItem = items.filter((item)=> item.id!==id )
        setComp([...Comp, completeItems]);
        setItems(deletedItem);
        console.log(completeItems)
    }
    const revertItems=(id) => {
        let revertedItems= Comp.find((item) => item.id===id );
        let revertsItem = Comp.filter((item) => item.id!==id )
        setComp(revertsItem);
        setItems([...items, revertedItems]);
        console.log(revertItems)
    }
    const deleteItem=(id) => {
        let deletingItem= Comp.filter((item) => item.id!==id);
        console.log(deletingItem);
        setComp(deletingItem)
    }
    const renderItem = ()=>{
       return items.map((item) => (
            <li key= {item.id}>
                <div className="group">
                    <img className="round" onClick={()=> completedItems(item.id)} />   
                    <h3>{item.id}, {item.name} </h3>
                </div>
                <img src={DeleteIcon} alt="image" onClick={()=> removeItem(item.id)} />
            </li>
             ) )
    }
    const completed =()=>(
        Comp.map((item)=>(
            <li key={item.id}>
                    <div className="one">
                        <img src={Tickgreen} alt="Image" />
                        <h3>{item.id}, {item.name}</h3>
                    </div>
                    <div className="container">
                        <img src={RevertIcon} alt="image" onClick={()=> revertItems(item.id)}/>
                        <img src={DeleteIcon} alt="Image" onClick={()=> deleteItem(item.id)} />
                    </div>
                </li>
        ))
    )
    return ( 
        
    <div className="box">
        <h1>To Do list</h1>
        <div className="top">
            <h2>Things to be done</h2>
            <ul>
               {renderItem()} 
              
            </ul>
            <div>
                <input type="text"placeholder="Type new Task" onKeyPress={(e) => e.key==='Enter' && addItems()} value={input} onChange={(e)=> setInput(e.target.value)} />
                <button onClick={addItems}>Add New</button>
            </div>
        </div>
        <div className="bottom">
            <h2>Completed</h2>
            <ul>
                {completed()}
            </ul>
        </div>
    </div>
    )
}
