const { default: mongoose } = require("mongoose");

const eventsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Offline", "Online"],
    },
    startDate: {
      type: String,
      required: true,
    },
    startDay: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    endDay: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    coverImageUrl: {
      type: String,
      required: true,
    },
    eventImageUrl: {
      type: String,
      required: true,
    },
    eventCost: {
      type: Number,
      required: true,
    },
    speakers: [
      {
        name: { type: String, required: true },
        title: { type: String, required: true },
        imageUrl: { type: String, required: true },
      },
    ],
    location: {
      venue: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    tags: {
      type: [String],
      required: false,
    },
    additionalInformation: {
      dressCode: { type: String, required: false },
      ageRestrictions: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  },
);

const Events = new mongoose.model("Events", eventsSchema);
module.exports = Events;
