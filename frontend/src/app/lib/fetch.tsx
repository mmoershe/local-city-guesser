"use server";

const BACKEND_URL: string = process.env.BACKEND_URL!;

export async function submitPlace(formData) {
  console.log(formData)
  const response = await fetch(`${BACKEND_URL}/images/upload`, {
    method: "POST", 
    body: formData
  })
  if (!response.ok) {
    throw new Error("Failed to submit place")
  }
  return await response.json()
}
