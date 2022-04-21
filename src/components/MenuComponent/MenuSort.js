const itemType = [
    'all',
    'Hot',
    'cocktails',
    'coffee',
    'tea',
]
const typeFilter = (t) => (dish) => {
    switch(t){
        case 'all':
            return dish
        default:
            return dish.label === t
    }
};

function MenuSort({handleTypeClick}){
    return itemType.map(type=>(
        <div className="col menu-type text-center">
            <button className="menu-type-btn" onClick={(e)=>{
                handleTypeClick(typeFilter(type));
                document.querySelectorAll('.menu-type.active').forEach(m=> m.classList.remove('active') );
                e.target.parentNode.classList.add('active');
            }}>{type}</button>
        </div>
    ))
}
export default MenuSort;