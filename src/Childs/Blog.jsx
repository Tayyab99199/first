import Nav from "./Nav"

let Blog = ({item})=>{
    return(
        <>
        <div ref={item} className="w-full flex justify-center items-center  h-screen bg-red-200">
                <h1 className="text-5xl">Blog</h1>
        </div>
        </>
    )
}
export default Blog