import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function authMiddleware(middleware) {
  return async (req, event) => {
    // const cookieStore = cookies()
    // const { pathname } = req.nextUrl;
    // const currentPath = pathname.split("/")[1];

    // if (!["login" , "register"].includes(currentPath)) {
    //   const accessToken = cookieStore.get('accessToken')?.value

    //   if (!accessToken)

    // }

    

    // console.log("lang => ", currentLang);
    return middleware(req, event);
  };
}
