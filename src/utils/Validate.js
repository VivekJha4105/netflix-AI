export const validate = (email, password) => {

  const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!emailTest) return "Email is invalid";
  if (!passwordTest) return "Password is invalid";

  return null;
};
