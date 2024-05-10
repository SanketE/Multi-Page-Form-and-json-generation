import json
from flask import Flask, jsonify
from flask import request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/jsondata",methods=["POST"])
def jsondata():    
    data = request.json
    # Display the received data (you can customize this as needed)
    print("Received data:", data)
    # # Return a response to the client (optional)
    return jsonify({"message": "Total object received successfully"}), 200


if __name__ == "__main__":
    app.run(debug=True)
