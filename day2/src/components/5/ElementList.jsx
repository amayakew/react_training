import Element from "./Element"

export default function ElementList({listContent}) {
    return <ul style={{listStyle: "none"}}>
                {listContent.map((item, itemIndex) => <Element key={itemIndex} text={item}/>)}
            </ul>
};