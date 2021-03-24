/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ReservationList } from './task/reservation';
import { ReservationListInstance } from './task/reservation';
import { SerializableClass } from '../../../../interfaces';

type TaskStatus = 'pending'|'reserved'|'assigned'|'canceled'|'completed'|'wrapping';

/**
 * Initialize the TaskList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The SID of the Workspace that contains the Task
 */
declare function TaskList(version: V1, workspaceSid: string): TaskListInstance;

/**
 * Options to pass to update
 *
 * @property assignmentStatus - The new status of the task
 * @property attributes - The JSON string that describes the custom attributes of the task
 * @property ifMatch - The If-Match HTTP request header
 * @property priority - The Task's new priority value
 * @property reason - The reason that the Task was canceled or complete
 * @property taskChannel - When MultiTasking is enabled, specify the TaskChannel with the task to update
 */
interface TaskInstanceUpdateOptions {
  assignmentStatus?: TaskStatus;
  attributes?: string;
  ifMatch?: string;
  priority?: number;
  reason?: string;
  taskChannel?: string;
}

interface TaskListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskContext;
  /**
   * create a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * create a TaskInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: TaskListInstanceCreateOptions, callback?: (error: Error | null, item: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * Streams TaskInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TaskInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: TaskListInstanceEachOptions, callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a task
   *
   * @param sid - The SID of the resource to fetch
   */
  get(sid: string): TaskContext;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TaskListInstanceOptions, callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TaskListInstancePageOptions, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - A URL-encoded JSON string describing the attributes of the task
 * @property priority - The priority to assign the new task and override the default
 * @property taskChannel - When MultiTasking is enabled specify the TaskChannel by passing either its unique_name or SID
 * @property timeout - The amount of time in seconds the task can live before being assigned
 * @property workflowSid - The SID of the Workflow that you would like to handle routing for the new Task
 */
interface TaskListInstanceCreateOptions {
  attributes?: string;
  priority?: number;
  taskChannel?: string;
  timeout?: number;
  workflowSid?: string;
}

/**
 * Options to pass to each
 *
 * @property assignmentStatus - Returns the list of all Tasks in the Workspace with the specified assignment_status
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property evaluateTaskAttributes - The task attributes of the Tasks to read
 * @property hasAddons - Whether to read Tasks with addons
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property ordering - Controls the order of the Tasks returned
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property priority - The priority value of the Tasks to read
 * @property taskQueueName - The friendly_name of the TaskQueue with the Tasks to read
 * @property taskQueueSid - The SID of the TaskQueue with the Tasks to read
 * @property workflowName - The friendly name of the Workflow with the Tasks to read
 * @property workflowSid - The SID of the Workflow with the Tasks to read
 */
interface TaskListInstanceEachOptions {
  assignmentStatus?: string | string[];
  callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
  done?: Function;
  evaluateTaskAttributes?: string;
  hasAddons?: boolean;
  limit?: number;
  ordering?: string;
  pageSize?: number;
  priority?: number;
  taskQueueName?: string;
  taskQueueSid?: string;
  workflowName?: string;
  workflowSid?: string;
}

/**
 * Options to pass to list
 *
 * @property assignmentStatus - Returns the list of all Tasks in the Workspace with the specified assignment_status
 * @property evaluateTaskAttributes - The task attributes of the Tasks to read
 * @property hasAddons - Whether to read Tasks with addons
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property ordering - Controls the order of the Tasks returned
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property priority - The priority value of the Tasks to read
 * @property taskQueueName - The friendly_name of the TaskQueue with the Tasks to read
 * @property taskQueueSid - The SID of the TaskQueue with the Tasks to read
 * @property workflowName - The friendly name of the Workflow with the Tasks to read
 * @property workflowSid - The SID of the Workflow with the Tasks to read
 */
interface TaskListInstanceOptions {
  assignmentStatus?: string | string[];
  evaluateTaskAttributes?: string;
  hasAddons?: boolean;
  limit?: number;
  ordering?: string;
  pageSize?: number;
  priority?: number;
  taskQueueName?: string;
  taskQueueSid?: string;
  workflowName?: string;
  workflowSid?: string;
}

/**
 * Options to pass to page
 *
 * @property assignmentStatus - Returns the list of all Tasks in the Workspace with the specified assignment_status
 * @property evaluateTaskAttributes - The task attributes of the Tasks to read
 * @property hasAddons - Whether to read Tasks with addons
 * @property ordering - Controls the order of the Tasks returned
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property priority - The priority value of the Tasks to read
 * @property taskQueueName - The friendly_name of the TaskQueue with the Tasks to read
 * @property taskQueueSid - The SID of the TaskQueue with the Tasks to read
 * @property workflowName - The friendly name of the Workflow with the Tasks to read
 * @property workflowSid - The SID of the Workflow with the Tasks to read
 */
interface TaskListInstancePageOptions {
  assignmentStatus?: string | string[];
  evaluateTaskAttributes?: string;
  hasAddons?: boolean;
  ordering?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  priority?: number;
  taskQueueName?: string;
  taskQueueSid?: string;
  workflowName?: string;
  workflowSid?: string;
}

interface TaskPayload extends TaskResource, Page.TwilioResponsePayload {
}

interface TaskResource {
  account_sid: string;
  addons: string;
  age: number;
  assignment_status: TaskStatus;
  attributes: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  priority: number;
  reason: string;
  sid: string;
  task_channel_sid: string;
  task_channel_unique_name: string;
  task_queue_entered_date: Date;
  task_queue_friendly_name: string;
  task_queue_sid: string;
  timeout: number;
  url: string;
  workflow_friendly_name: string;
  workflow_sid: string;
  workspace_sid: string;
}

interface TaskSolution {
  workspaceSid?: string;
}


declare class TaskContext {
  /**
   * Initialize the TaskContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The SID of the Workspace with the Task to fetch
   * @param sid - The SID of the resource to fetch
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  /**
   * fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * remove a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskInstance) => any): Promise<boolean>;
  reservations: ReservationListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * update a TaskInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskInstanceUpdateOptions, callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
}


declare class TaskInstance extends SerializableClass {
  /**
   * Initialize the TaskContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The SID of the Workspace that contains the Task
   * @param sid - The SID of the resource to fetch
   */
  constructor(version: V1, payload: TaskPayload, workspaceSid: string, sid: string);

  private _proxy: TaskContext;
  accountSid: string;
  addons: string;
  age: number;
  assignmentStatus: TaskStatus;
  attributes: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
  links: string;
  priority: number;
  reason: string;
  /**
   * remove a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskInstance) => any): Promise<boolean>;
  /**
   * Access the reservations
   */
  reservations(): ReservationListInstance;
  sid: string;
  taskChannelSid: string;
  taskChannelUniqueName: string;
  taskQueueEnteredDate: Date;
  taskQueueFriendlyName: string;
  taskQueueSid: string;
  timeout: number;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * update a TaskInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskInstanceUpdateOptions, callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
  url: string;
  workflowFriendlyName: string;
  workflowSid: string;
  workspaceSid: string;
}


declare class TaskPage extends Page<V1, TaskPayload, TaskResource, TaskInstance> {
  /**
   * Initialize the TaskPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskSolution);

  /**
   * Build an instance of TaskInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskPayload): TaskInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { TaskContext, TaskInstance, TaskInstanceUpdateOptions, TaskList, TaskListInstance, TaskListInstanceCreateOptions, TaskListInstanceEachOptions, TaskListInstanceOptions, TaskListInstancePageOptions, TaskPage, TaskPayload, TaskResource, TaskSolution, TaskStatus }
