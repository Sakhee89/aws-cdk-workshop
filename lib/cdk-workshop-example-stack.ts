import { Stack, StackProps } from "aws-cdk-lib";
import { Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import * as apigw from "aws-cdk-lib/aws-apigateway";

export class CdkWorkshopExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const hello = new Function(this, "HelloHandler", {
      runtime: Runtime.NODEJS_16_X, // execution environment
      code: Code.fromAsset("lambda"), // code loaded from "lambda" directory
      handler: "hello.handler", // file is "hello", function is "handler"
    });
    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: hello,
    });
  }
}
