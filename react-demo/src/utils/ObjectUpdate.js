import {useState} from 'react';

export default function ObjectUpdate(){
    function handelFirst(e){
        setPerson(
            {
                ...person,first:e.target.value
            }
        
        );
    }
    function handelLast(e){
        setPerson({...person,last:e.target.value});

    }
    const [person,setPerson]=useState({first:'',last:''});
    return (
        <div style={{border:'3px solid black',background:'cyan'}}>
            <h3>Object Update Demo</h3>
            <p>first:<input type="text" value={person.first} onChange={handelFirst}></input></p>
            <p>last:<input type="text" value={person.last} onChange={handelLast} ></input></p>
            <p>Welcome <h3>{person.first}&nbsp;{person.last}</h3></p>
        </div>
    );
}