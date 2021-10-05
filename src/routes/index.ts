import { Vacancies } from "../utils";
import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome");
});

router.get("/vacancies", async function (req, res, next) {
  let vacancies = await Vacancies.find({});
  console.log("FIND VACANCIES:", vacancies);
  try {
    res.json({
      vacancies,
    });
    // res.send("welcome");
  } catch (e) {
    console.log("ERROR:", e);
  }
});

export default router;
