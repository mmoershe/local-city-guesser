from fastapi import FastAPI, File, UploadFile

import os
import shutil
import uuid


app = FastAPI()

CURRENT_DIRECTORY: str = os.path.dirname(__file__)
BACKEND_DIRECTORY: str = os.path.dirname(CURRENT_DIRECTORY)
IMAGES_DIRECTORY: str = os.path.join(BACKEND_DIRECTORY, "images")


@app.get("/")
def root(): 
    return {"status": "ok"}

@app.post("/images/upload")
def images_upload(file: UploadFile): 
    filename: str = f"{uuid.uuid4()}.jpg"
    filepath: str = os.path.join(IMAGES_DIRECTORY, filename)
    try: 
        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        return {"message": f"Successfully saved image to '{filepath}'."}
    except Exception as e: 
        return {"message": e.args}


if __name__ == "__main__": 
    import uvicorn 
    uvicorn.run(app, host="0.0.0.0", port=8000)
