from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware

import os
import shutil
import uuid


app = FastAPI()


origins: list = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CURRENT_DIRECTORY: str = os.path.dirname(__file__)
BACKEND_DIRECTORY: str = os.path.dirname(CURRENT_DIRECTORY)
IMAGES_DIRECTORY: str = os.path.join(BACKEND_DIRECTORY, "images")
if not os.path.exists(IMAGES_DIRECTORY): 
    os.makedirs(IMAGES_DIRECTORY)


@app.get("/")
def root(): 
    return {"status": "ok"}

@app.post("/images/upload")
def images_upload(file: UploadFile, 
                  titel: str = Form(...), 
                  latitude: float = Form(...), 
                  longitude: float = Form(...), 
                  autor: str = Form(...)):
    print(f"{titel = }")
    print(f"{latitude= }")
    print(f"{longitude = }")
    print(f"{autor = }")
    filename: str = f"{uuid.uuid4()}.jpg"
    filepath: str = os.path.join(IMAGES_DIRECTORY, filename)
    try: 
        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        print("Bild wurde hochgeladen")
        return {"message": f"Successfully saved image to '{filepath}'.", "success": True}
    except Exception as e: 
        return {"message": e.args}


if __name__ == "__main__": 
    import uvicorn 
    uvicorn.run(app, host="0.0.0.0", port=8000)
