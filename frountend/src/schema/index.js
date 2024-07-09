import * as Yup from "yup";
// Validation
export const loginSchema = Yup.object({
  password: Yup.string().required("Please enter password"),
  email: Yup.string().email("Please valid email-Id").required("Please enter email")
});

export const singUpSchema = Yup.object({
  password: Yup.string().required("Please enter password"),
  email: Yup.string().email().required("Please enter  email"),
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
});

