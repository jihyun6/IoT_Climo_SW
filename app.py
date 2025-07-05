from flask import Flask
from flask_cors import CORS

from app.routes.user_routes import user_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(user_bp)

@app.route('/')
def hello_world():
    return 'hello'

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)