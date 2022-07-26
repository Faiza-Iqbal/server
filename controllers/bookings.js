import Booking from "../models/booking.js";

export const addBooking = async (req, res) => {
  const booking = req.body;
  const newBooking = new Booking(booking);

  try {
    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(409).json({ meesage: error.meesage });
  }
};
