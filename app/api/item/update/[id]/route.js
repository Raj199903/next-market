import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels" 

export async function PUT(request, context){
    const reqBody = await request.json() 
    try{
        await connectDB()
        const resolvedParams = await context.params
        await ItemModel.updateOne({_id: resolvedParams.id}, reqBody)
        return NextResponse.json({message: "アイテム編集成功"})
    }catch{
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}