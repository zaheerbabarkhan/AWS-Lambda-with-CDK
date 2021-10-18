import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apiGateway from '@aws-cdk/aws-apigateway';
export class AwsCloudPracticeStack extends cdk.Stack {
	constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);
		const hello = new lambda.Function(this, 'HelloLambda', {
			runtime: lambda.Runtime.NODEJS_14_X,
			code: lambda.Code.fromAsset('lambda'),
			handler: 'hello.handler',
		});

		new apiGateway.LambdaRestApi(this, 'hello', { handler: hello });
		// The code that defines your stack goes here
	}
}
