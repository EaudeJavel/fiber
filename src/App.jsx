import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'


function App() {
    return <>

        <Canvas
            gl = { {
                antialias: false,
                outputEncoding: THREE.sRGBEncoding,
            } }
            camera={ {
                position: [ 3, 2, 6 ],
                fov: 45,
                far: 200,
                near: 0.1,
            } }
        >
            <Experience />
        </Canvas>

    </>
}

export default App
