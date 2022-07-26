import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  numOfAdults: {
    type: String,
    required: false,
  },
  numOfChilds: {
    type: String,
    required: false,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  tourId: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
