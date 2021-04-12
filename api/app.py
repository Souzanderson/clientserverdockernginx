from flask import Flask, render_template, request, jsonify, send_file
from flask_cors import CORS, cross_origin

import datetime

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
cors = CORS(app, resources={r"/": {"origins": "http://localhost:3001"}})


@app.route("/")
@cross_origin(origin='http://localhost:3001', headers=['Content- Type', 'Authorization'])
def home():
    return jsonify({
        "name": "API Centralize Inspector - Analyze",
        "version": "3.0.0"
    })
    
@app.route("/item")
@cross_origin(origin='http://localhost:3001', headers=['Content- Type', 'Authorization'])
def item():
    return jsonify({
        "item": "Novo item",
        "id_": "6310fddfcv1512"
    })

if __name__ == '__main__':
    print("Servidor iniciado!")
    app.run(threaded=True, host="0.0.0.0", port=9000)