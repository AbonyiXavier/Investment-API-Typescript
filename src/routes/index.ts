const router = require("express").Router();
import userRoute from "./user.route";
import profileRoute from "./profile.route";
import transactionRoute from "./transaction.route";
import planRoute from "./plan.route";
import roleRoute from "./role.route"


router.use("/v1", userRoute);
router.use("/v1", profileRoute);
router.use("/v1", transactionRoute);
router.use("/v1", planRoute);
router.use("/v1", roleRoute);


export default router;