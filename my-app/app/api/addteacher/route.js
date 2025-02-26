import data from '../../school.json'
export async function POST(request) {
    const formData = await request.formData()
    const id=parseInt(formData.get('id'))
    const name = formData.get('name')
    const subject = formData.get('subject')
    let newdata={
        "id":id,
        "name":name,
        "subject":subject

    }
    data.teachers.push(newdata)
    return Response.json(data.teachers)
  }