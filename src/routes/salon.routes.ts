import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import { createSalonSchema } from "../schemas/salon.schema";
import { createSalonHandler, getAllSalonhandler} from "../controllers/salon.controller";
//import { getCategorySchema } from "../schemas/category.schema";
//import{GetCategorySchema} from"../schemas/salon.schema";

const router = express.Router();

router.use(deserializeUser, requireUser);

router.post('/createsalonData',validate(createSalonSchema),createSalonHandler)
router.get('/getAllSalons',getAllSalonhandler)
//router.get('/:category',validate(getCategorySchema), getSalonsByCategoryHandler);
// router
//   .route('/salons/:category')
//   .get(validate(getCategorySchema), getSalonsByCategoryHandler)
//router.get('/email',findUserWithEmailHandler )
export default router;
