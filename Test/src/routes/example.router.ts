import {
    NextFunction,
    Request,
    Response,
    Router
    } from 'express';

const router = Router();

router.get('/hello/:name', (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params;
  res.send(`Hello ${name} from express`);
});

export const exampleRouter = router;
