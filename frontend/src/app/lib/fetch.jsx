"use server";

const BACKEND_URL = process.env.BACKEND_URL;

export async function submitPlace(formData) {
    console.log(formData)
    const URL = `${BACKEND_URL}/images/upload`
    console.log(`URL = ${URL}`)
    const response = await fetch(URL, {
        method: "POST",
        body: formData
    })
    if (!response.ok) {
        throw new Error("Failed to submit place")
    }
    return await response.json()
}
