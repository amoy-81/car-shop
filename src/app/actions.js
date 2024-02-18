"use server";
import { query } from "@/lib/db";
import { getUserById } from "@/services/auth.service";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";

import { cookies } from "next/headers";

export async function setCookieAction(name, value) {
  cookies().set(name, value);
}

export async function whoAmI() {
  const token = cookies().get("accessToken")?.value;
  try {
    const userId = jwt.verify(token, process.env.JWT_KEY);

    if (typeof userId === "object" && "id" in userId) {
      const userDatas = await getUserById(userId.id);

      if (userDatas.length == 0) return null;

      revalidatePath("/");
      return {
        id: userDatas[0].id,
        name: userDatas[0].name,
        username: userDatas[0].username,
      };
    }
  } catch (error) {
    return null;
  }
}

export async function newComment(carId, comment) {
  try {
    const user = await whoAmI();

    if (!user) return { success: false, message: "وارد حساب شوید" };

    const createComment = await query({
      query: `
      INSERT INTO comments (user_id , car_id , comment) VALUES (? , ? , ?)
    `,
      values: [user.id, carId, comment],
    });

    if (createComment[0]?.success === false)
      return { success: false, message: createComment[0]?.message };

    return { success: true, message: "نظر شما ثبت شد" };
  } catch (error) {
    return { success: false, message: "خطا در برقراری ارتباط" };
  }
}

export const getCookies = async (key) => {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(key);

  return cookie;
};
