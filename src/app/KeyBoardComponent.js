"use client"
import React, { useEffect } from 'react'
function KeyBoardComponent() {
    useEffect(()=>{

        CreateCustomHindiTextBox("id1", "नमस्कार संसार", 40, true);
    },[]);
  return (
    <div className="id1">
       
    </div>
  )
}

export default KeyBoardComponent