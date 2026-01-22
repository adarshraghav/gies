import { createApp, log } from "./app";

(async () => {
  const isProd = process.env.NODE_ENV === "production";
  const isVercel = process.env.VERCEL === "1";

  const { httpServer } = await createApp({
    // On Vercel we deploy the SPA as static output; don't try to serve it from Express.
    enableStatic: isProd && !isVercel,
    enableVite: !isProd,
  });

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
