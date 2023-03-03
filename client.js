import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECTID ,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token:process.env.NEXT_PUBLIC_TOKEN
    // token: process.env.REACT_APP_PROJECT_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source)=>builder.image(source);
