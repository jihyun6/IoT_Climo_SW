from app.dao.user_dao import insert_user

def register_user(username, password,email,userImg):
    # 간단한 유효성 검사 (생략 가능)
    if not username or not password or not email:
        return False, "아이디/비밀번호/이메일 누락"
    # DB Insert
    ok = insert_user(username, password,email,userImg)
    if ok:
        return True, "회원가입 성공"
    else:
        return False, "DB 오류"
