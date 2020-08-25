#import requests
import json
import os
import mariadb
import logging
from dotenv import load_dotenv

class fuelTypes(object):
    def __init__(self):
        load_dotenv()
        logging.basicConfig(level=os.environ.get("LOGLEVEL", "INFO"))
        self.logger = logging.getLogger('prometo.fuel_types.fuelTypes')
        self.logger.info('creating an instance of fuelTypes')

    def get_allfueltypes(self):
        try:
            conn = mariadb.connect(
                user = os.getenv("MARIADB_USERNAME"),
                password = os.getenv("MARIADB_PASSWORD"),
                host = os.getenv("MARIADB_HOST"),
                database = "prometeo")

            cursor = conn.cursor()

            self.logger.info('calling the stored procedure')
            cursor.callproc('sp_select_all_fuel_types')
            # for result in cursor.stored_results():
                # data = result.fetchall()
            data = cursor.fetchall()
            if len(data) > 0:
                self.logger.debug('there is data:')
                for i in data:
                    self.logger.debug(i)
                return(data)
            else:
                self.logger.debug('no data')
                return None
        
        except mariadb.Error as f:
           self.logger.error("Error connecting to MariaDB Platform:")
           self.logger.error(f)
            #sys.exit(1)

        except Exception as e:
            self.logger.error('error getting the data')
            self.logger.error(e)
            return None

        finally:
            cursor.close()
            conn.close()