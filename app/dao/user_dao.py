from app.dao.db import get_conn

def insert_user(username, password, email,userImg):
    conn = get_conn()
    try:
        with conn.cursor() as cursor:
            sql = "INSERT INTO user (user_nm, user_pw, user_email, user_img_path) VALUES (%s, %s, %s,%s)"
            cursor.execute(sql, (username, password, email, userImg))
        conn.commit()
        return True
    except Exception as e:
        print('DB Insert Error:', e)
        return False
    finally:
        conn.close()