"use server";

import z from "zod";

interface Errors {
  streetAddress?: string[];
  city?: string[];
  state?: string[];
  zipCode?: string[];
  country?: string[];
}

interface FormInput {
  streetAddress?: string;
  apartment?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface FormState {
  success: boolean;
  errors: Errors;
  formInput: FormInput;
}

export async function submitForm(prevState: FormState, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const formSchema = z.object({
    streetAddress: z.string().trim().min(1, "Please enter your street address"),
    apartment: z.string().trim(),
    city: z.string().trim().min(1, "Please enter your city"),
    state: z.string().trim().min(1, "Please enter your state"),
    zipCode: z
      .string()
      .trim()
      .min(5, "ZIP code should not be less than 5 digits")
      .max(6, "ZIP code should not be more than 6 digits"),
    country: z.string().trim().min(1, "Please enter your country"),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const formInput: FormSchema = {
    streetAddress: formData.get("streetAddress") as string,
    apartment: formData.get("apartment") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zipCode: formData.get("zipCode") as string,
    country: formData.get("country") as string,
  };

  const result = formSchema.safeParse(formInput);

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      formInput,
    };
  } else {
    return {
      success: true,
      errors: {},
      formInput,
    };
  }

  // const errors: Errors = {};

  // if (!formInput.streetAddress) {
  //   errors.streetAddress = "Please enter your street address";
  // }

  // if (!formInput.city) {
  //   errors.city = "Please enter your city";
  // }

  // if (!formInput.state) {
  //   errors.state = "Please enter your state";
  // }

  // if (!formInput.zipCode) {
  //   errors.zipCode = "Please enter your zip code";
  // }

  // if (!formInput.country) {
  //   errors.country = "Please enter your country";
  // }

  // if (Object.keys(errors).length > 0) {
  //   console.log({
  //     success: false,
  //     errors,
  //     formInput,
  //   });
  //   return {
  //     success: false,
  //     errors,
  //     formInput,
  //   };
  // }

  // console.log({
  //   success: true,
  //   errors,
  // });

  // return {
  //   success: true,
  //   errors,
  // };
}
