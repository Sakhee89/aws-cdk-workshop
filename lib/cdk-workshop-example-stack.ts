import { Stack, StackProps } from "aws-cdk-lib";
import { Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { HitCounter } from "./hitcounter";

export class CdkWorkshopExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const hello = new Function(this, "HelloHandler", {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset("lambda"),
      handler: "hello.handler",
    });

    const helloWithCounter = new HitCounter(this, "HelloHitCounter", {
      downstream: hello,
    });

    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: helloWithCounter.handler,
    });
  }
}
