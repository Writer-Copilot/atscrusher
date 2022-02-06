FROM python

WORKDIR /

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY app.py .

ENTRYPOINT ["python3"]

CMD ["app.py"]