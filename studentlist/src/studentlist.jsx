import { useState } from "react";
function Studentlist(props) {
    const [clickedButtonId, setClickedButtonId] = useState(null);
    const list = props.list || []; // Use list from props, defaulting to an empty array
    const addlist = props.addlist; // Keep the addlist function from props
    const newlist = props.newlist || []; // Use newlist from props, defaulting to an empty array
    const setList = props.setList; // Correct capitalization of setList prop

    function add(addId) {
        const newFavorite = list.find(item => item.id === addId);
        
        setClickedButtonId(addId);



        // Only add if the item is not already in newlist to avoid duplicates
        if (newFavorite && !newlist.some(item => item.id === addId)) {
            setList([...newlist, newFavorite]);
            console.log(newlist)
        }
    }

    return (
        <>
            {list.map(item => (
                <div key={item.id}className="p-4 flex ">
                    <p className="text-2xl w-32">{item.name}</p>
                    <button onClick={() => add(item.id)} className={`p-2 border rounded-md text-2xl ${
                            clickedButtonId === item.id
                                ?"bg-blue-50"
                                : "bg-black text-white"
                        }`}>
                        Add Favourite
                    </button>
                </div>
            ))}
        </>
    );
}

export default Studentlist;
