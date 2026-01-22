import type { IncomingMessage, ServerResponse } from "http";
import type { Express } from "express";
import { createApp } from "../server/app";

let cachedApp: Express | undefined;

async function getApp(): Promise<Express> {
  if (!cachedApp) {
    const { app } = await createApp({
      enableStatic: false,
      enableVite: false,
    });
    cachedApp = app;
  }
  return cachedApp;
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  const app = await getApp();
  return (app as any)(req, res);
}

