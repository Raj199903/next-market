import Link from "next/link"
import Image from "next/image"

const getAllItems = async () => {
    // ✅ FIXED: Changed single quotes to backticks (`) to allow template literal interpolation
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`, { cache: "no-store" })
    const jsonData = await response.json()
    const allItems = jsonData.allItems
    return allItems
}

const ReadAllItems = async () => {
    console.log("Current URL:", process.env.NEXT_PUBLIC_URL)
    
    // Safely fetch data; if allItems is null/undefined, default to an empty array
    const allItems = await getAllItems() || []
    
    return (
        <div className="grid-container-in">
            {allItems.map(item => 
                <Link href={`/item/readsingle/${item._id}`} key={item._id}>
                    {/* If item.image is a remote URL, make sure it's configured in next.config.js */}
                    <Image src={item.image} width={750} height={500} alt="item-image" priority/>
                    <div> 
                        <h2>¥{item.price}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.description ? `${item.description.substring(0, 80)}...` : ""}</p>  
                    </div>
                </Link>
            )}
        </div>
    )
} 

export default ReadAllItems