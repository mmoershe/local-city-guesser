"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BACKEND_URL: string | undefined = process.env.BACKEND_URL;

export default function UploadForm() {
    console.log(BACKEND_URL)
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);

    // Handle input changes
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        console.log("Title wurde geändert")
        console.log(title)
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Get the first file (if multiple files allowed, handle accordingly)
        console.log("Bild wurde hochgeladen")
        console.log(image)
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page

        // Ensure an image is selected
        if (!image) {
            alert("Please upload an image!");
            return;
        }

        // Create form data object to send the file and title
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        console.log(formData)

        try {
            // Submit the form data (change URL to your API route or server endpoint)
            console.log(`${BACKEND_URL}/images/upload`)
            const response = await fetch(`${BACKEND_URL}/images/upload`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Form submitted successfully!");
                // Optionally reset form here
            } else {
                alert("Failed to submit form.");
            }
        } catch (error) {
            console.error("Error uploading the form:", error);
            alert("An error occurred while submitting the form.");
        }
    };


    return (
        <Card className="w-[80%]">
            <CardHeader>
                <CardTitle>Lade einen neuen Ort hoch</CardTitle>
                <CardDescription>Füge einen neuen Ort hinzu, den die anderen erraten müssen!</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full items-center gap-8">
                        <div className="flex flex-col space-y-1.5 w-full">
                            <Label htmlFor="image">Bild hochladen</Label>
                            <Input type="file" id="image" placeholder="Lade das Bild hoch" onChange={handleImageChange} />
                        </div>
                        <div className="flex flex-col space-y-1.5 w-full">
                            <Label htmlFor="titel">Titel</Label>
                            <Input id="titel" placeholder="Gib deinem Ort einen Titel" onChange={handleTitleChange} />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button type="submit" onClick={handleSubmit}>Deploy</Button>
            </CardFooter>
        </Card>
    )
}
