import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name:'dwjjotvv4',
    api_key:'196597968756494',
    api_secret:'gj0m3PXC9kEHPENELZYVd7-EkC8' ,
    secure:true
})



describe('pruebas en < fileUpload>',()=>{

test('debe desubir el archivo correctamente acloudinary', async () => { 
const imageUrl='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'

const resp= await fetch(imageUrl)
const blob= await resp.blob()
const file = new File ([blob],'atardecer.jpg')

const url = await fileUpload(file)

// console.log(url);

const segments = url.split('/')
const imageId= segments[segments.length-1].replace('.png','');

console.log(imageId);

 const cloudResp = await cloudinary.api.delete_resources(['journal/'+imageId],{resource_type:'image'})

// console.log({cloudResp});

 // expect (typeof url ).toBe('string')

   })

   test('debe de retornar null', async () => { 
    
    const file = new File ([],'atardecer.jpg')
    
    const url = await fileUpload(file)
    
    
     expect (url ).toBe(null)
    
    })

})