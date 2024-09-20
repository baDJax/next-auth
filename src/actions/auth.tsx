// @ts-ignore
import conn from "@/lib/db";
import { FormState, SignupFormSchema } from "@/lib/definitions";
import bcrypt from "bcryptjs";
export async function signup(state: FormState, formData: FormData) {
  //Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //Data for insertion
  const { name, email, password } = validatedFields.data;

  //Password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  // @ts-ignore
  const data = await conn
    .insert("admin-data")
    .values({ name, email, password: hashedPassword });

  const user = data[0];

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
}
