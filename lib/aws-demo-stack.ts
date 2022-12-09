import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "MyFirstBucketName");

    new cdk.CfnOutput(this, "MyFirstBucketNameExport", {
      value: bucket.bucketName,
      exportName: "MyFirstBucketName",
    });
  }
}
