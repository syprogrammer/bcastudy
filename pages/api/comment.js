import {client} from '../../client'

export default async function handler(req, res) {
    const id = req.query.id
   
    const query = `*[_type=="comment" && postid=="${id}"]`
   
    const allcomments = await client.fetch(query)
    res.status(200).json(allcomments)
}