FROM python:slim

WORKDIR /usr/src/app

COPY . . 

RUN apt update && apt upgrade -y 

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "-u", "api/main.py"]
