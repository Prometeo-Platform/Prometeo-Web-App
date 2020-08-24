#import requests
import json
import mariadb

class status(object):

    def get_allstatus(self):
        print("get_allstatus - entro en la funcion")

        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            print("get_allstatus - llamada a sql")
            cursor.callproc('sp_select_all_status')
            for result in cursor.stored_results():
                data = result.fetchall()
            if len(data) > 0:
                print("get_allstatus - Hay informacion")
                for i in data:
                    print(i)
                return(data)
            else:
                print("get_allstatus - NO HAY INFORMACION")
                return None
        except Exception as e:
            print("get_allstatus - Estoy en la excepcion")
            return None

        finally:
            cursor.close()
            con.close()
