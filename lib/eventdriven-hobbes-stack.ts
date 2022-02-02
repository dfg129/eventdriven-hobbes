import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as events from 'aws-cdk-lib/aws-events';
import { Rule } from 'aws-cdk-lib/aws-events';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as path from 'path';
import { DynamodbStack } from '../../event-lambda-hobbes/lib/dynamodb-stack';
import { EventbridgeHobbesStack  } from '../../eventbridge-hobbes/lib/eventbridge-hobbes-stack';

export class EventdrivenHobbesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const app = new App();

     //const dynamo = new DynamodbStack(app, 'dynamodb-stack', {});

    const eventbus = new EventbridgeHobbesStack(app, 'hobbes-eventbus', {
    });
  }
}
