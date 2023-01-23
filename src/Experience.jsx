import { Float, Text, Html, PivotControls, TransformControls ,OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience()
{

    const cube = useRef()
    const sphere = useRef()

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [1, 2, 3] } />
        <ambientLight intensity={ 0.5 } />

        <group>
            <PivotControls
                anchor={ [ 0, 0, 0 ] }
                depthTest={ false }
            >
                <mesh ref={ cube } position={ [ 2, 0, 0 ] } scale={ 1.5 }>
                    <boxGeometry scale={ 1.5 } />
                    <meshStandardMaterial color="mediumpurple" />
                    <Html
                    position={ [ 1, 0, 0 ] }
                    wrapperClass="wrapper"
                    center
                    distanceFactor={ 5 }
                    occlude={ [ cube, sphere ] }
                    >
                        love you
                    </Html>
                </mesh>
            </PivotControls>

            <mesh position={ [ -2, 0, 0 ] } ref={ sphere }  >
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

        </group>
        <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 100 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Float
            speed={ 2 }
            floatIntensity={ 2 }
        >
            <Text
                font="./inter-v12-latin-regular.woff"
                fontSize={ 0.5 }
                position-y={ 2 }
                maxWidth={ 3 }
                textAlign="center"
            >
                <meshNormalMaterial />
                Elisa it was for you
            </Text>
        </Float>

    </>
}
