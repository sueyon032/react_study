import React, { useEffect, useState } from 'react';

const LifeCycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log("Mount!");
    },[]);

    useEffect(()=>{
        console.log("Update!");
    });

    useEffect(()=>{
        console.log(`count is update: ${count}`);
        if(count>5){
            alert("count가 5를 넘었습니다 따라서 1로 초기화합니다");
            setCount(1);
        }
    }, [count]);

    useEffect(()=>{
        console.log(`text is iuipdate: ${text}`);
    }, [text]);

    return (
        <div style={{ padding: 20 }}>
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
                <input type={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
        </div >
    )
};

export default LifeCycle;