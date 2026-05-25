import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function DELETE(request, context){
    try{
        await connectDB()
        const resolvedParams = await context.params
        await ItemModel.deleteOne({_id: resolvedParams.id}) 
        return NextResponse.json({message: "アイテム削除成功"})
    }catch{
        return NextResponse.json({message: "アイテム削除失敗"})
    }
}