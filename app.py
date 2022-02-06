from wc import genCover
from flask import Flask, request

app = Flask(__name__)

print('Works')

@app.route("/", methods = ['GET'])
def test():
    return("hello guys")

@app.route("/", methods = ['POST'])
def generate():
    body = request.get_json()
    company_mission = body["company_mission"]
    user_beliefs = body["user_beliefs"]
    key = body["key"]
    res = genCover.generate(company_mission, user_beliefs, key)
    return(res)

app.run(debug = True, host = "0.0.0.0")