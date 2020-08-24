#import requests
import json
import mariadb
import logging

class fuelTypes(object):
    def __init__(self):
        self.logger = logging.getLogger('prometo.fuel_types.fuelTypes')
        self.logger.debug('creating an instance of fuelTypes')

    def get_allfueltypes(self):
        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            self.logger.debug('calling the stored procedure')
            cursor.callproc('sp_select_all_fuel_types')
            for result in cursor.stored_results():
                data = result.fetchall()
            if len(data) > 0:
                self.logger.debug('there is data:')
                for i in data:
                    self.logger.debug(i)
                return(data)
            else:
                self.logger.debug('no data')
                return None
        except Exception as e:
            self.logger.error('error getting the data')
            self.logger.error(e)
            return None

        finally:
            cursor.close()
            con.close()