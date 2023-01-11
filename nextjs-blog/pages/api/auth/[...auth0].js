// pages/api/auth/[...auth0].js
import { handleAuth, handleLogout } from '@auth0/nextjs-auth0';
//export default handleAuth();

export default handleAuth({
    //overriding base logout function to redirect to certain link if specified
    async logout(req, res) {
      const returnTo = req.query.returnTo;
      try {
        await handleLogout(req, res, {
          returnTo
        });
      } catch (error) {
        res.status(error.status || 400).end(error.message);
      }
    }
  });