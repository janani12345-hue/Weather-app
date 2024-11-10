

function Favourite(props) {
    const newlist = props.newlist || []; // Use newlist from props, defaulting to an empty array
    const setList = props.setList; //

    function remove(removeId) {
        const newarr = newlist.filter(function(item){
            if(item.id == removeId)  {
                return false
            }  
            else{
                return true
            }  
          });
        setList(newarr);
    }

    return (
        <>
            {newlist.map(item => (
                <div key={item.id} className="p-4 flex ">
                    <p className="text-2xl w-32">{item.name}</p>
                    <button onClick={() => remove(item.id)} className="bg-red-400 text-white text-2xl border rounded-md p-1 w-40">Remove</button>
                </div>
            ))}
        </>
    );
}

export default Favourite;