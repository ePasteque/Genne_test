from flask import Blueprint, render_template, request, jsonify

home = Blueprint("home", __name__)

@home.route("/")
def home_page():
    return render_template("index.html")
@home.route('/get', methods=['GET'])
def get_example():
    # Example of handling a GET request
    return jsonify({"message": "This is a GET request"})
