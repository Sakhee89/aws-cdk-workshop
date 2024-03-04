#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopExampleStack } from '../lib/cdk-workshop-example-stack';

const app = new cdk.App();
new CdkWorkshopExampleStack(app, 'CdkWorkshopExampleStack');
