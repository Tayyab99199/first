let Modal = ({setShowModal,setFriend_list,friend_list,name,data,setData})=>{

    let close_modal = ()=>{
        setShowModal(false)
    }

    let add_friend = ()=>{
        let new_array = [...friend_list,name]
        setFriend_list(new_array)
        setShowModal(false)
        
        let data2 = data.filter((obj)=>{
            return  obj.name != name
        })
        setData(data2)
    }

    return(
        <>
        <div style={{padding:'20px'}} className="w-52 h-28 border rounded-2xl bg-mist-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <h3 className="font-bold">Want to make Friend</h3>
            <div style={{marginTop:'20px'}} className="flex gap-3">
                <button onClick={add_friend} className="bg-green-600 text-white w-24 cursor-pointer rounded-4xl">Yes</button>
                <button onClick={close_modal} className="text-red-500 cursor-pointer">No</button>
            </div>
        </div>
        <div className="fixed left-0 top-0 w-full h-screen z-10 bg-black/50">

        </div>
        </>
    )
}

export default Modal