import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';

export const useCharacter = () => {
    const [position, setPosition] = useState({x: 5, y: 3});
    const [side, setSide] = useState<CharacterSides>('down');
    const moveLeft = () =>{
            setPosition(position => ({
            x: canMove(position.x - 1, position.y) ? position.x -1: position.x,
            y: position.y
        }))
        setSide('left')
        
        
    }

    const moveRight = () =>{
     
        setPosition(position => ({
            x: canMove(position.x + 1, position.y) ? position.x + 1: position.x,
            y: position.y
        }))
        setSide('right')
    
    }

    const moveDown = () =>{
       
        setPosition(position => ({
            x: position.x ,
            y: canMove(position.x , position.y + 1) ? position.y + 1 : position.y,
        }))
        setSide('down')
    
    }

    const moveUp = () =>{
        setPosition(position => ({
            x: position.x ,
            y: canMove(position.x , position.y - 1) ? position.y - 1 : position.y,
        }))
        setSide('up')
        
    }

    const canMove = (x:number, y:number) => {
        console.log(x,y)
        if(x < 0 || y < 0)  return false;

        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            if(mapSpots[x][y] === 1){
                return true;
            }
        }
        return false;
    }
    return {
        x:position.x,
        y: position.y,
        side,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    }
}