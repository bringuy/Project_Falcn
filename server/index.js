const express  = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

const port = 3001

//middleware
app.use(cors());
app.use(express.json()) //req.body

//ROUTES//
 
  //Add a school
  app.post("/schools", async (req, res) => {
    try {
      const { name, location, admission, image } = req.body;
      const newSchool = await pool.query(
        "INSERT INTO school (name, location, admission, image) VALUES($1, $2, $3, $4) RETURNING *",
        [name, location, admission, image]
      );
      res.json(newSchool.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  //Get all schools
  app.get("/schools", async (req, res) => {
    console.log('helloMother')
    try {
      const allSchools = await pool.query("SELECT * FROM school");
      res.json(allSchools.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  //Get specific school, DON'T THINK I NEED
  app.get("/schools/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const school = await pool.query("SELECT * FROM school WHERE school_id = $1", [
        id
      ]);
      res.json(school.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  //update school
  app.put("/school/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, location, admission, image } = req.body;
      const updateSchool = await pool.query(
        "UPDATE school SET (name, location, admission, image) = ($1,$2,$3,$4) WHERE school_id = $5",
        [name, location, admission, image, id]
      );
  
      res.json("School was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  
 