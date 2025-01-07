export default function ButtonDemo(){
    function handelButton1(){
        alert("This is button 1");
    }
    function handelButton2(){
        alert("This is button 2");
    }
    return (
        <div style={{border:'3px solid black',background:'gray'}}>
            <h2>Button Demo</h2>
            <p>
                <button onClick={handelButton1}>button1</button>
            </p>
            <p>
                <button onClick={handelButton2}>button2</button>
            </p>
        </div>
    );
}