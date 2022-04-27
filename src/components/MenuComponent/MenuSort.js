const itemType = [
    'all',
    'drink',
    'coffee',
    'food',
    'beer',
]
const typeFilter = (t) => (dish) => {
    switch(t){
        case 'all':
            return dish
        default:
            return dish.category === t
    }
};

function MenuSort({handleTypeClick}){
    return itemType.map((type,id)=>(
        <div key={id} className="col menu-type text-center">
            <button className="menu-type-btn" onClick={(e)=>{
                handleTypeClick(typeFilter(type));
                document.querySelectorAll('.menu-type.active').forEach(m=> m.classList.remove('active') );
                e.target.parentNode.classList.add('active');
            }}>{type}</button>
        </div>
    ))
}
export default MenuSort;