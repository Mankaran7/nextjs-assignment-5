import { NextResponse } from 'next/server'
import data from '../../school.json'
export  async function GET (){
    return NextResponse.json(data.teachers)
}