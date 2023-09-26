

 export const fileUpload= async (file ) =>{

    if(!file)throw new Error('Notenemos ningún archivo a subir')

const cloudURL ='https://api.cloudinary.com/v1_1/dwjjotvv4/image/upload'

const formData= new FormData();
formData.append('upload_preset','React-Journal')
formData.append('file',file)

try {
    const resp= await fetch (cloudURL,{
        method:'POST',
        body:formData
    })
    console.log(resp);
    if(!resp.ok) throw newError('Nose pudo Subir la imagen')
    const cloudResp= await resp.json()

console.log({cloudResp});


    return cloudResp.secure_url
    
} catch (error) {
    console.log(error);
    throw new Error(error.message)
    
 }

}