import React, { useState, useEffect } from "react";

function Quote() {
  const [quotes, setQuotes] = useState("");
   const getData = async() => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setQuotes(data.slip.advice);
      };

      useEffect(()=>{
        getData()
      },[])

  return (
    <section className="section">
      <h1>{quotes}</h1>
      <button className="btn" onClick={()=>getData()}>
        GIVE ME ADVICE
      </button>
    </section>
  );
}

export default Quote;
