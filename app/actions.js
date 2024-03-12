"use server"

export async function ManualOnOff(name, formData) {


    try {
        const response = await fetch(`https://acapi.tak21maasik.itmajakas.ee/ManualOnOff?name=${name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Adjust the content type based on your API requirements
                // Additional headers if needed
            },
        })  
        // console.log(response)
    }
    catch (error) {
        // Handle errors
        console.error('Error making POST request:', error.message);
    }
    
}
// mutate data
// revalidate cache


export async function ManualControll(name ,formData) {

    try {
        const response = await fetch(`https://acapi.tak21maasik.itmajakas.ee/ManualControll?name=${name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Adjust the content type based on your API requirements
                // Additional headers if needed
            },
        })
    }

    catch (error) {
        // Handle errors
        console.error('Error making POST request:', error.message);
    }
}
// mutate data
// revalidate cache
