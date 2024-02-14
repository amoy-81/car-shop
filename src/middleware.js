import { chain } from "./middlewares/chain";
import { authMiddleware } from "./middlewares/auth.middleware";

// middlewares
const middlewares = [authMiddleware];

export default chain(middlewares);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
