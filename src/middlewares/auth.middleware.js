import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function authMiddleware(middleware) {
  return async (req, event) => {
    const cookieStore = cookies();
    const { pathname } = req.nextUrl;
    const currentPath = pathname.split("/")[1];

    if (["orders"].includes(currentPath)) {
      const accessToken = cookieStore.get("accessToken")?.value;

      if (!accessToken) {
        return NextResponse.redirect(new URL(`/auth/login`, req.url));
      }

      return NextResponse.next();
    }

    if (["auth"].includes(currentPath)) {
      const accessToken = cookieStore.get("accessToken")?.value;

      if (accessToken) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    }

    // console.log("lang => ", currentLang);
    return middleware(req, event);
  };
}
