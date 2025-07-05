# app/dao/db.py

import pymysql
from config import DB_CONFIG  # 별도 config 파일에서 가져오는 방식(아래 참고)

def get_conn():
    conn = pymysql.connect(
        host=DB_CONFIG['host'],
        port=DB_CONFIG['port'],
        user=DB_CONFIG['user'],
        password=DB_CONFIG['password'],
        db=DB_CONFIG['database'],
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )
    return conn
