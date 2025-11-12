import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validate = (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          code: 400,
          message: 'Validation Error',
          errors: error.errors.map((err) => ({
            path: err.path,
            message: err.message,
          })),
        });
      }
      next(error);
    }
  };
