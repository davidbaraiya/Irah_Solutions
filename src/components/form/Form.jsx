import React, { useState } from "react";
import { InputLabel, FormControl, Input, Button } from "@mui/material";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });

  console.log(formData);

  // Form data input chnage
  const inputFormData = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form action="">
      <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input
          id="name-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={inputFormData}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
        <InputLabel htmlFor="phone-input">Phone</InputLabel>
        <Input
          id="phone-input"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={inputFormData}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input
          id="email-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={inputFormData}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
        <InputLabel htmlFor="note-input">Note</InputLabel>
        <Input
          id="note-input"
          type="text"
          name="note"
          value={formData.note}
          onChange={inputFormData}
        />
      </FormControl>
      <div
        className="btn-wrapper"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className="mt-3 w-100"
        >
          Log In
        </Button>
      </div>
    </form>
  );
};

export default Form;
