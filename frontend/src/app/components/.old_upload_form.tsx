"use client";

import { submitPlace } from "./../lib/fetch";

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
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BACKEND_URL: string | undefined = process.env.BACKEND_URL;

export default function UploadForm() {
    console.log(BACKEND_URL)
    const [titel, setTitel] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [autor, setAutor] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleTitelChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitel(e.target.value);
    };
    const handleLatitudeChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setLatitude(e.target.value);
    };
    const handleLongitudeChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setLongitude(e.target.value);
    };
    const handleAutorChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutor(e.target.value);
    };
    const handleFileChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
    };
    };

    // Handle form submission
    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault(); // Prevent form from reloading the page

        // Ensure an file is selected
        if (!file) {
            alert("Please upload an image!");
            return;
        }

        // Create form data object to send the file and title
        const formData = new FormData();
        formData.append("file", file);
        formData.append("titel", titel);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);
        formData.append("autor", autor);
        console.log(formData)

        submitPlace(formData)

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
                            <Label htmlFor="file">Bild hochladen</Label>
                            <Input type="file" id="file" placeholder="Lade das Bild hoch" onChange={handleFileChange} />
                        </div>
                        <div className="flex flex-col space-y-1.5 w-full">
                            <Label htmlFor="titel">Titel</Label>
                            <Input id="titel" placeholder="Gib deinem Ort einen Titel" onChange={handleTitelChange} required />
                        </div>
                        <div className="flex flex-col space-y-1.5 w-full">
                            <Label htmlFor="autor">Autor</Label>
                            <Input id="autor" placeholder="Gib deinen Namen ein" onChange={handleAutorChange} />
                        </div>
                        <Card className="w-full p-8 flex flex-col gap-6">
                            <CardTitle>Koordinaten</CardTitle>
                        <div className="flex flex-col space-y-1.5 w-full">
                            <Label htmlFor="latitude">Latitude</Label>
                            <Input id="latitude" type="number" placeholder="Gib die Latitude des Ortes ein" onChange={handleLatitudeChange} />
                        </div>
                        <div className="flex flex-col space-y-1.5 w-full">
                            <Label htmlFor="longitude">Longitude</Label>
                            <Input id="longitude" type="number" placeholder="Gib die Longitude des Ortes ein" onChange={handleLongitudeChange} />
                        </div>
                        </Card>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button type="submit" onClick={handleSubmit}>Ort hinzufügen</Button>
            </CardFooter>
        </Card>
    )
}
