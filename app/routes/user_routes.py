# app/routes/user_routes.py
from flask import Blueprint, jsonify, request
from app.services.user_service import register_user

user_bp = Blueprint('user', __name__)

@user_bp.route('/user/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    userImg = data.get('userImg')
    ok, msg = register_user(username, password,email,userImg)
    return jsonify({"success": ok, "message": msg})