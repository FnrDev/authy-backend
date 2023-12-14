import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { fromZodError } from 'zod-validation-error';

export default function validate(schema: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            z.object(schema).parse({ body: req.body, params: req.params, query: req.query });
            return next();
        } catch (err: any) {
            return res.status(500).json({ error: fromZodError(err, { issueSeparator: " &" }).message })
        }
    }
}