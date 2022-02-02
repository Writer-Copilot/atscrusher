from wc import genCover
from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods = ['POST'])
def generate():
    body = request.get_json()
    company_mission = body["company_mission"]
    user_beliefs = body["user_beliefs"]
    key = body["key"]
    res = genCover.generate(company_mission, user_beliefs, key)
    return(res)