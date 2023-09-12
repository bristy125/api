const express = require("express");
const router = express.Router();
const petController = require("./app");
// GET all pets
router.get("/", petController.getAllPets);

// GET a pet by ID
router.get("/:id", petController.getPetById);

// CREATE a new pet
router.post("/", petController.createPet);

// UPDATE a pet by ID
router.put("/:id", petController.updatePet);

// DELETE a pet by ID
router.delete("/:id", petController.deletePet);

module.exports = router;
