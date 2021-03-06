import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  createTenant,
  updateTenants,
  getTenants,
  deleteTenant,
} from "../controllers/tenantController";

const prisma = new PrismaClient();

const tenantRoute = express.Router();

tenantRoute.post("/tenants/add", createTenant);

tenantRoute.get("/tenants", getTenants);

tenantRoute.put("/tenants/:id", updateTenants);

tenantRoute.delete("/tenants/:id", deleteTenant);

export default tenantRoute;
