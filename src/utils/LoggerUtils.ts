import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
   level: 'info',
   format: format.combine(
      format.json(),
   ),
   defaultMeta: {
      name: 'crud-compass',
      // msg: 
   },
   transports: [
      new transports.Console({
         level: 'debug'
      })
   ],
});