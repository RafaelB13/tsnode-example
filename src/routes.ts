import { Router } from 'express';
import { sendSuccessResponse } from './utils';

const router = Router();

router.get('/', (req, res) => {
  sendSuccessResponse(res, 200, 'Welcome to the server');
});

export default router;