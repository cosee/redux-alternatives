import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {RecoilDemo} from "./recoil/RecoilDemo";
import {ValtioDemo} from "./valtio/ValtioDemo";
import {ZustandDemo} from "./zustand/ZustandDemo";

function App() {


    return (
        <div>
            <h1>Recoil:</h1>
            <RecoilDemo/>
            <hr/>
            <h1>Recoil:</h1>
            <ValtioDemo/>
            <hr/>
            <h1>Recoil:</h1>
            <ZustandDemo/>
        </div>

    )
}

export default App
