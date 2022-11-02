import * as C from './styles';

type Props = {
    x: number;
    y: number;
}
export const Character = ({x, y}: Props) => {
    const size = 30;
    // para posicionar o character
    return(
        <C.Container
        size = { size}
        left={ x * size}
        top={ y * size}
        >
            
        </C.Container>
    )
}