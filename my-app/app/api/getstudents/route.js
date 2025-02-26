import { NextResponse } from "next/server"
import data from '../../school.json'
export function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const id = parseInt(searchParams.get('id'))
    const arr=data.students.filter((item)=>item.teacher_id!=id)
    return NextResponse.json({arr})
  }