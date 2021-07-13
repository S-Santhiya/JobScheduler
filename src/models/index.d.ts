import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type jobschedulerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class jobscheduler {
  readonly id: string;
  readonly accountname: string;
  readonly accounttype: string;
  readonly accountnumber: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<jobscheduler, jobschedulerMetaData>);
  static copyOf(source: jobscheduler, mutator: (draft: MutableModel<jobscheduler, jobschedulerMetaData>) => MutableModel<jobscheduler, jobschedulerMetaData> | void): jobscheduler;
}