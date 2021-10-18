#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCloudPracticeStack } from '../lib/aws-cloud-practice-stack';

const app = new cdk.App();
new AwsCloudPracticeStack(app, 'AwsCloudPracticeStack', {});
