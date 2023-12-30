import { NextFunction, Request, Response } from 'express';

const validateRequest = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
 
    const result = await schema.safeParseAsync(req.body)
    
    if(!result.Success){
        next(result.error)
    }else{
        req.body = result.data
        next()
    }
  };
};

export default validateRequest;
