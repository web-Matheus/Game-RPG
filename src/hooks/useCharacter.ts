import { useState } from 'react';

export const useCharacter = () => {
    const [position, setPosition] = useState({x: 5, y: 3});

    const moveLeft = () =>{
        setPosition(position => ({
            x: position.x - 1,
            y: position.y
        }))
    }

    const moveRight = () =>{
        setPosition(position => ({
            x: position.x + 1,
            y: position.y
        }))
    }

    const moveDown = () =>{
        setPosition(position => ({
            x: position.x ,
            y: position.y + 1
        }))
    }

    const moveUp = () =>{
        setPosition(position => ({
            x: position.x ,
            y: position.y - 1
        }))
    }

    return {
        x:position.x,
        y: position.y,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    }
}