from flask import Flask, render_template
from home import home


app = Flask(__name__, static_folder = "../frontend/static", template_folder = "../frontend")
app.register_blueprint(home)

if __name__ == '__main__':
    app.run(debug=True)
