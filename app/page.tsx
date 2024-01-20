"use client"
import { useEffect } from "react"
import dingloIO from "@/dinglo";
import { DingloIOWidget } from "dingloio1";

export default function Home() {

  useEffect(()=>{
    dingloIO.initializeSocket();
  },[]);

  return (
          <main className="h-[300vh]">
            <DingloIOWidget dingloIO={dingloIO}/>
    </main>

  )
}
