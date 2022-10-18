import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7Svg from '../../svgs/b7.svg'; 
import { items } from '../../data/Items';

type Props ={
    item:GridItemType,
    onClick: ()=> void
}

export const GridItem= ({item, onClick}:Props)=>{
    return(
        <C.Container 
            showBg={item.permanentShown || item.shown}
            onClick={onClick}>
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={b7Svg} opacity={.1} />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon}/>
            }
        </C.Container>
    )
}