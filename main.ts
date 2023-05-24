#!/usr/bin/env ts-node

import { App } from "aws-cdk-lib";
import { PrivateMasquerade, PublicMasquerade } from "./modules/infrastructure";
import { config } from "./package.json";

const application = new App();

new PrivateMasquerade(application, config.stack.private.name);

new PublicMasquerade(application, config.stack.public.name);
