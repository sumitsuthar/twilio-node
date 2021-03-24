/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the SubscribedEventList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param subscriptionSid - Subscription SID.
 */
declare function SubscribedEventList(version: V1, subscriptionSid: string): SubscribedEventListInstance;

/**
 * Options to pass to update
 *
 * @property version - The schema version that the subscription should use.
 */
interface SubscribedEventInstanceUpdateOptions {
  version?: number;
}

interface SubscribedEventListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SubscribedEventContext;
  /**
   * create a SubscribedEventInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SubscribedEventListInstanceCreateOptions, callback?: (error: Error | null, item: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
  /**
   * Streams SubscribedEventInstance records from the API.
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
  each(callback?: (item: SubscribedEventInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SubscribedEventInstance records from the API.
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
  each(opts?: SubscribedEventListInstanceEachOptions, callback?: (item: SubscribedEventInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a subscribed_event
   *
   * @param type - Type of event being subscribed to.
   */
  get(type: string): SubscribedEventContext;
  /**
   * Retrieve a single target page of SubscribedEventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
  /**
   * Retrieve a single target page of SubscribedEventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
  /**
   * Lists SubscribedEventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SubscribedEventInstance[]) => any): Promise<SubscribedEventInstance[]>;
  /**
   * Lists SubscribedEventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SubscribedEventListInstanceOptions, callback?: (error: Error | null, items: SubscribedEventInstance[]) => any): Promise<SubscribedEventInstance[]>;
  /**
   * Retrieve a single page of SubscribedEventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
  /**
   * Retrieve a single page of SubscribedEventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SubscribedEventListInstancePageOptions, callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property type - Type of event being subscribed to.
 * @property version - The schema version that the subscription should use.
 */
interface SubscribedEventListInstanceCreateOptions {
  type: string;
  version?: number;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SubscribedEventListInstanceEachOptions {
  callback?: (item: SubscribedEventInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SubscribedEventListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SubscribedEventListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SubscribedEventPayload extends SubscribedEventResource, Page.TwilioResponsePayload {
}

interface SubscribedEventResource {
  account_sid: string;
  subscription_sid: string;
  type: string;
  url: string;
  version: number;
}

interface SubscribedEventSolution {
  subscriptionSid?: string;
}


declare class SubscribedEventContext {
  /**
   * Initialize the SubscribedEventContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param subscriptionSid - Subscription SID.
   * @param type - Type of event being subscribed to.
   */
  constructor(version: V1, subscriptionSid: string, type: string);

  /**
   * fetch a SubscribedEventInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
  /**
   * remove a SubscribedEventInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SubscribedEventInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
  /**
   * update a SubscribedEventInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SubscribedEventInstanceUpdateOptions, callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
}


declare class SubscribedEventInstance extends SerializableClass {
  /**
   * Initialize the SubscribedEventContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param subscriptionSid - Subscription SID.
   * @param type - Type of event being subscribed to.
   */
  constructor(version: V1, payload: SubscribedEventPayload, subscriptionSid: string, type: string);

  private _proxy: SubscribedEventContext;
  accountSid: string;
  /**
   * fetch a SubscribedEventInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
  /**
   * remove a SubscribedEventInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<boolean>;
  subscriptionSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: string;
  /**
   * update a SubscribedEventInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
  /**
   * update a SubscribedEventInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SubscribedEventInstanceUpdateOptions, callback?: (error: Error | null, items: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
  url: string;
  version: number;
}


declare class SubscribedEventPage extends Page<V1, SubscribedEventPayload, SubscribedEventResource, SubscribedEventInstance> {
  /**
   * Initialize the SubscribedEventPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SubscribedEventSolution);

  /**
   * Build an instance of SubscribedEventInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscribedEventPayload): SubscribedEventInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SubscribedEventContext, SubscribedEventInstance, SubscribedEventInstanceUpdateOptions, SubscribedEventList, SubscribedEventListInstance, SubscribedEventListInstanceCreateOptions, SubscribedEventListInstanceEachOptions, SubscribedEventListInstanceOptions, SubscribedEventListInstancePageOptions, SubscribedEventPage, SubscribedEventPayload, SubscribedEventResource, SubscribedEventSolution }
