const express = require("express");
const Place = require("../models/place");

const router = express.Router();

//Create route
router.post("/", (request, response) => {
  const newPlace = new Place.model(request.body);
  newPlace.save((err, Place) => {
    return err ? response.sendStatus(500).json(err) : response.json(place);
  });
});

router.get("/", (request, response) => {
  Place.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  Place.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete("/:id", (request, response) => {
  Place.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/:id", (request, response) => {
  Place.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        caption: request.data.features.place_name,
        name: request.data.features.text,
        address: request.data.features.properties.address,
        street: request.data.features.context[0].text,
        city: request.data.features.context[2].text,
        state: request.data.features.context[4].text,
        zip: request.data.features.context[1].text
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
