import React from "react";
import {v4 as uuidv4} from "uuid";



const initialList = [
    {
        id: "a",
        name: "Robin",
    },
    {
        id: "b",
        name:"Dennis"
    }
];

const listReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {...state, list:state.list.concat({name: action.name, id: action.id})};
        default:
            throw new Error();
    }
}

const AddItem = ({name, onChange, onAdd}) => {
    return(
        <div>
            <input type="text" value={name} onChange={onChange} />
            <button type="button" onClick={onAdd}>Add</button>
        </div>
    )
}

const List = ({list}) => {
    return(
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

const FeedCard = () => {

    const [listData, dispatchListData] = React.useReducer(listReducer,{list:initialList, isShowList: true});
    const [name, setName] = React.useState(" "); 

    function handleChange(event){
        setName(event.target.value);
    }

    function handleAdd(){
        dispatchListData({type:"ADD_ITEM", name, id:uuidv4()});
   
        setName(" ");
    }    

    return(
        <div>
            <div className="ui card">
                <div className="content">
                    <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
                    <List list={listData.list} />
                </div>
            </div>
        </div>
    );
    
}

export default FeedCard;