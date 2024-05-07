// Code generated by protoc-gen-typescript-http. DO NOT EDIT.
/* eslint-disable camelcase */
// @ts-nocheck

export enum ShipmentState {
  /**
   * The shipment' state is unknown
   */
  UnknownUnspecified = 0,
  /**
   * The shipment'state is active
   */
  Active = 1,
  /**
   * The shipment'state is inactive
   */
  Inactive = 2,
}
/**
 * A shipment represents transportation of goods between an origin
 * [site][einride.example.freight.v1.Site] and a destination
 * [site][einride.example.freight.v1.Site].
 */
export type Shipment = {
  /**
   * The resource name of the shipment.
   */
  name: string;
  /**
   * The creation timestamp of the shipment.
   *
   * Behaviors: OUTPUT_ONLY
   */
  createTime: wellKnownTimestamp | undefined;
  /**
   * The last update timestamp of the shipment.
   * Updated when create/update/delete operation is shipment.
   *
   * Behaviors: OUTPUT_ONLY
   */
  updateTime: wellKnownTimestamp | undefined;
  /**
   * The deletion timestamp of the shipment.
   *
   * Behaviors: OUTPUT_ONLY
   */
  deleteTime: wellKnownTimestamp | undefined;
  /**
   * The resource name of the origin site of the shipment.
   * Format: shippers/{shipper}/sites/{site}
   *
   * Behaviors: REQUIRED
   */
  originSite: string;
  /**
   * The resource name of the destination site of the shipment.
   * Format: shippers/{shipper}/sites/{site}
   *
   * Behaviors: REQUIRED
   */
  destinationSite: string;
  /**
   * The earliest pickup time of the shipment at the origin site.
   *
   * Behaviors: REQUIRED
   */
  pickupEarliestTime: wellKnownTimestamp | undefined;
  /**
   * The latest pickup time of the shipment at the origin site.
   *
   * Behaviors: REQUIRED
   */
  pickupLatestTime: wellKnownTimestamp | undefined;
  /**
   * The earliest delivery time of the shipment at the destination site.
   *
   * Behaviors: REQUIRED
   */
  deliveryEarliestTime: wellKnownTimestamp | undefined;
  /**
   * The latest delivery time of the shipment at the destination site.
   *
   * Behaviors: REQUIRED
   */
  deliveryLatestTime: wellKnownTimestamp | undefined;
  /**
   * The line items of the shipment.
   */
  lineItems: LineItem[];
  /**
   * Annotations of the shipment.
   */
  annotations: { [key: string]: string };
  /**
   * The state of the shipment
   */
  state: ShipmentState;
  /**
   * wrapper string
   */
  wrapperString?: wellKnownStringValue | undefined;
  /**
   * long number
   */
  longNumber: string;
  /**
   * wrapper long number
   */
  wrapperLongNumber: wellKnownInt64Value | undefined;
};

// Encoded using RFC 3339, where generated output will always be Z-normalized
// and uses 0, 3, 6 or 9 fractional digits.
// Offsets other than "Z" are also accepted.
type wellKnownTimestamp = string;

/**
 * A shipment line item.
 */
export type LineItem = {
  /**
   * The title of the line item.
   */
  title: string;
  /**
   * The quantity of the line item.
   */
  quantity: number;
  /**
   * The weight of the line item in kilograms.
   */
  weightKg: number;
  /**
   * The volume of the line item in cubic meters.
   */
  volumeM3?: number;
};

type wellKnownStringValue = string | null;

type wellKnownInt64Value = string | null;

/**
 * A shipper is a supplier or owner of goods to be transported.
 */
export type Shipper = {
  /**
   * The resource name of the shipper.
   */
  name: string;
  /**
   * The creation timestamp of the shipper.
   *
   * Behaviors: OUTPUT_ONLY
   */
  createTime: wellKnownTimestamp | undefined;
  /**
   * The last update timestamp of the shipper.
   * Updated when create/update/delete operation is performed.
   *
   * Behaviors: OUTPUT_ONLY
   */
  updateTime: wellKnownTimestamp | undefined;
  /**
   * The deletion timestamp of the shipper.
   *
   * Behaviors: OUTPUT_ONLY
   */
  deleteTime: wellKnownTimestamp | undefined;
  /**
   * The display name of the shipper.
   *
   * Behaviors: REQUIRED
   */
  displayName: string;
};

/**
 * A site is a node in a [shipper][einride.example.freight.v1.Shipper]'s
 * transport network.
 */
export type Site = {
  /**
   * The resource name of the site.
   */
  name: string;
  /**
   * The creation timestamp of the site.
   *
   * Behaviors: OUTPUT_ONLY
   */
  createTime: wellKnownTimestamp | undefined;
  /**
   * The last update timestamp of the site.
   * Updated when create/update/delete operation is performed.
   *
   * Behaviors: OUTPUT_ONLY
   */
  updateTime: wellKnownTimestamp | undefined;
  /**
   * The deletion timestamp of the site.
   *
   * Behaviors: OUTPUT_ONLY
   */
  deleteTime: wellKnownTimestamp | undefined;
  /**
   * The display name of the site.
   *
   * Behaviors: REQUIRED
   */
  displayName: string;
  /**
   * The geographic location of the site.
   */
  latLng: googletype_LatLng;
};

/**
 * An object that represents a latitude/longitude pair. This is expressed as a
 * pair of doubles to represent degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the
 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
 * standard</a>. Values must be within normalized ranges.
 */
export type googletype_LatLng = {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   */
  latitude: number;
  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   */
  longitude: number;
};

/**
 * Request message for FreightService.GetShipper.
 */
export type GetShipperRequest = {
  /**
   * The resource name of the shipper to retrieve.
   * Format: shippers/{shipper}
   *
   * Behaviors: REQUIRED
   */
  name: string;
};

/**
 * Request message for FreightService.ListShippers.
 */
export type ListShippersRequest = {
  /**
   * Requested page size. Server may return fewer shippers than requested.
   * If unspecified, server will pick an appropriate default.
   */
  pageSize: number;
  /**
   * A token identifying a page of results the server should return.
   * Typically, this is the value of
   * [ListShippersResponse.next_page_token][einride.example.freight.v1.ListShippersResponse.next_page_token]
   * returned from the previous call to `ListShippers` method.
   */
  pageToken: string;
};

/**
 * Response message for FreightService.ListShippers.
 */
export type ListShippersResponse = {
  /**
   * The list of shippers.
   */
  shippers: Shipper[];
  /**
   * A token to retrieve next page of results.  Pass this value in the
   * [ListShippersRequest.page_token][einride.example.freight.v1.ListShippersRequest.page_token]
   * field in the subsequent call to `ListShippers` method to retrieve the next
   * page of results.
   */
  nextPageToken: string;
};

/**
 * Request message for FreightService.CreateShipper.
 */
export type CreateShipperRequest = {
  /**
   * The shipper to create.
   *
   * Behaviors: REQUIRED
   */
  shipper: Shipper;
};

/**
 * Request message for FreightService.UpdateShipper.
 */
export type UpdateShipperRequest = {
  /**
   * The shipper to update with. The name must match or be empty.
   * The shipper's `name` field is used to identify the shipper to be updated.
   * Format: shippers/{shipper}
   *
   * Behaviors: REQUIRED
   */
  shipper: Shipper;
  /**
   * The list of fields to be updated.
   */
  updateMask: wellKnownFieldMask | undefined;
};

// In JSON, a field mask is encoded as a single string where paths are
// separated by a comma. Fields name in each path are converted
// to/from lower-camel naming conventions.
// As an example, consider the following message declarations:
//
//     message Profile {
//       User user = 1;
//       Photo photo = 2;
//     }
//     message User {
//       string display_name = 1;
//       string address = 2;
//     }
//
// In proto a field mask for `Profile` may look as such:
//
//     mask {
//       paths: "user.display_name"
//       paths: "photo"
//     }
//
// In JSON, the same mask is represented as below:
//
//     {
//       mask: "user.displayName,photo"
//     }
type wellKnownFieldMask = string;

/**
 * Request message for FreightService.DeleteShipper.
 */
export type DeleteShipperRequest = {
  /**
   * The resource name of the shipper to delete.
   * Format: shippers/{shipper}
   *
   * Behaviors: REQUIRED
   */
  name: string;
};

/**
 * Request message for FreightService.GetSite.
 */
export type GetSiteRequest = {
  /**
   * The resource name of the site to retrieve.
   * Format: shippers/{shipper}/sites/{site}
   *
   * Behaviors: REQUIRED
   */
  name: string;
};

/**
 * Request message for FreightService.ListSites.
 */
export type ListSitesRequest = {
  /**
   * The resource name of the parent, which owns this collection of sites.
   * Format: shippers/{shipper}
   *
   * Behaviors: REQUIRED
   */
  parent: string;
  /**
   * Requested page size. Server may return fewer sites than requested.
   * If unspecified, server will pick an appropriate default.
   */
  pageSize: number;
  /**
   * A token identifying a page of results the server should return.
   * Typically, this is the value of
   * [ListSitesResponse.next_page_token][einride.example.freight.v1.ListSitesResponse.next_page_token]
   * returned from the previous call to `ListSites` method.
   */
  pageToken: string;
};

/**
 * Response message for FreightService.ListSites.
 */
export type ListSitesResponse = {
  /**
   * The list of sites.
   */
  sites: Site[];
  /**
   * A token to retrieve next page of results.  Pass this value in the
   * [ListSitesRequest.page_token][einride.example.freight.v1.ListSitesRequest.page_token]
   * field in the subsequent call to `ListSites` method to retrieve the next
   * page of results.
   */
  nextPageToken: string;
};

/**
 * Request message for FreightService.CreateSite.
 */
export type CreateSiteRequest = {
  /**
   * The resource name of the parent shipper for which this site will be
   * created. Format: shippers/{shipper}
   *
   * Behaviors: REQUIRED
   */
  parent: string;
  /**
   * The site to create.
   *
   * Behaviors: REQUIRED
   */
  site: Site;
};

/**
 * Request message for FreightService.UpdateSite.
 */
export type UpdateSiteRequest = {
  /**
   * The site to update with. The name must match or be empty.
   * The site's `name` field is used to identify the site to be updated.
   * Format: shippers/{shipper}/sites/{site}
   *
   * Behaviors: REQUIRED
   */
  site: Site;
  /**
   * The list of fields to be updated.
   */
  updateMask: wellKnownFieldMask | undefined;
};

/**
 * Request message for FreightService.DeleteSite.
 */
export type DeleteSiteRequest = {
  /**
   * The resource name of the site to delete.
   * Format: shippers/{shipper}/sites/{site}
   *
   * Behaviors: REQUIRED
   */
  name: string;
};

/**
 * Request message for FreightService.GetShipment.
 */
export type GetShipmentRequest = {
  /**
   * The resource name of the shipment to retrieve.
   * Format: shippers/{shipper}/shipments/{shipment}
   *
   * Behaviors: REQUIRED
   */
  name: string;
};

/**
 * Request message for FreightService.ListShipments.
 */
export type ListShipmentsRequest = {
  /**
   * The resource name of the parent, which owns this collection of shipments.
   * Format: shippers/{shipper}
   *
   * Behaviors: REQUIRED
   */
  parent: string;
  /**
   * Requested page size. Server may return fewer shipments than requested.
   * If unspecified, server will pick an appropriate default.
   */
  pageSize: number;
  /**
   * A token identifying a page of results the server should return.
   * Typically, this is the value of
   * [ListShipmentsResponse.next_page_token][einride.example.freight.v1.ListShipmentsResponse.next_page_token]
   * returned from the previous call to `ListShipments` method.
   */
  pageToken: string;
  /**
   * query condition
   *
   * Behaviors: OPTIONAL
   */
  query?: { [key: string]: QueryMessage };
};

export type QueryMessage = {
  key: string;
  value: string;
  nestedQuery?: QueryMessage;
};

/**
 * Response message for FreightService.ListShipments.
 */
export type ListShipmentsResponse = {
  /**
   * The list of shipments.
   */
  shipments: Shipment[];
  /**
   * A token to retrieve next page of results.  Pass this value in the
   * [ListShipmentsRequest.page_token][einride.example.freight.v1.ListShipmentsRequest.page_token]
   * field in the subsequent call to `ListShipments` method to retrieve the next
   * page of results.
   */
  nextPageToken: string;
};

/**
 * Request message for FreightService.CreateShipment.
 */
export type CreateShipmentRequest = {
  /**
   * The resource name of the parent shipper for which this shipment will be
   * created. Format: shippers/{shipper}
   *
   * Behaviors: REQUIRED
   */
  parent: string;
  /**
   * The shipment to create.
   *
   * Behaviors: REQUIRED
   */
  shipment: Shipment;
};

/**
 * Request message for FreightService.UpdateShipment.
 */
export type UpdateShipmentRequest = {
  /**
   * The shipment to update with. The name must match or be empty.
   * The shipment's `name` field is used to identify the shipment to be updated.
   * Format: shippers/{shipper}/shipments/{shipment}
   *
   * Behaviors: REQUIRED
   */
  shipment: Shipment;
  /**
   * The list of fields to be updated.
   */
  updateMask: wellKnownFieldMask | undefined;
};

/**
 * Request message for FreightService.DeleteShipment.
 */
export type DeleteShipmentRequest = {
  /**
   * The resource name of the shipment to delete.
   * Format: shippers/{shipper}/shipments/{shipment}
   *
   * Behaviors: REQUIRED
   */
  name: string;
};

/**
 * This API represents a simple freight service.
 * It defines the following resource model:
 * - The API has a collection of [Shipper][einride.example.freight.v1.Shipper]
 * resources, named `shippers/*`
 * - Each Shipper has a collection of [Site][einride.example.freight.v1.Site]
 * resources, named `shippers/∗/sites/*`
 * - Each Shipper has a collection of
 * [Shipment][einride.example.freight.v1.Shipment]
 * resources, named `shippers/∗/shipments/*`
 */
export interface FreightService<T = unknown> {
  /**
   * Get a shipper.
   * See: https://google.aip.dev/131 (Standard methods: Get).
   */
  getShipper(request: GetShipperRequest, options?: T): Promise<Shipper>;
  /**
   * List shippers.
   * See: https://google.aip.dev/132 (Standard methods: List).
   */
  listShippers(request: ListShippersRequest, options?: T): Promise<ListShippersResponse>;
  /**
   * Create a shipper.
   * See: https://google.aip.dev/133 (Standard methods: Create).
   */
  createShipper(request: CreateShipperRequest, options?: T): Promise<Shipper>;
  /**
   * Update a shipper.
   * See: https://google.aip.dev/134 (Standard methods: Update).
   */
  updateShipper(request: UpdateShipperRequest, options?: T): Promise<Shipper>;
  /**
   * Delete a shipper.
   * See: https://google.aip.dev/135 (Standard methods: Delete).
   * See: https://google.aip.dev/164 (Soft delete).
   */
  deleteShipper(request: DeleteShipperRequest, options?: T): Promise<Shipper>;
  /**
   * Get a site.
   * See: https://google.aip.dev/131 (Standard methods: Get).
   */
  getSite(request: GetSiteRequest, options?: T): Promise<Site>;
  /**
   * List sites for a shipper.
   * See: https://google.aip.dev/132 (Standard methods: List).
   */
  listSites(request: ListSitesRequest, options?: T): Promise<ListSitesResponse>;
  /**
   * Create a site.
   * See: https://google.aip.dev/133 (Standard methods: Create).
   */
  createSite(request: CreateSiteRequest, options?: T): Promise<Site>;
  /**
   * Update a site.
   * See: https://google.aip.dev/134 (Standard methods: Update).
   */
  updateSite(request: UpdateSiteRequest, options?: T): Promise<Site>;
  /**
   * Delete a site.
   * See: https://google.aip.dev/135 (Standard methods: Delete).
   * See: https://google.aip.dev/164 (Soft delete).
   */
  deleteSite(request: DeleteSiteRequest, options?: T): Promise<Site>;
  /**
   * Get a shipment.
   * See: https://google.aip.dev/131 (Standard methods: Get).
   */
  getShipment(request: GetShipmentRequest, options?: T): Promise<Shipment>;
  /**
   * List shipments for a shipper.
   * See: https://google.aip.dev/132 (Standard methods: List).
   */
  listShipments(request: ListShipmentsRequest, options?: T): Promise<ListShipmentsResponse>;
  /**
   * Create a shipment.
   * See: https://google.aip.dev/133 (Standard methods: Create).
   */
  createShipment(request: CreateShipmentRequest, options?: T): Promise<Shipment>;
  /**
   * Update a shipment.
   * See: https://google.aip.dev/134 (Standard methods: Update).
   */
  updateShipment(request: UpdateShipmentRequest, options?: T): Promise<Shipment>;
  /**
   * Delete a shipment.
   * See: https://google.aip.dev/135 (Standard methods: Delete).
   * See: https://google.aip.dev/164 (Soft delete).
   */
  deleteShipment(request: DeleteShipmentRequest, options?: T): Promise<Shipment>;
}

/** The URIs for FreightService */
export interface FreightServiceURIs<T = unknown> {
  /** Get the URI of `GetShipper` method */
  getGetShipperURI(request: GetShipperRequest, options?: T): string;
  /** Get the URI of `ListShippers` method */
  getListShippersURI(request: ListShippersRequest, options?: T): string;
  /** Get the URI of `CreateShipper` method */
  getCreateShipperURI(request: CreateShipperRequest, options?: T): string;
  /** Get the URI of `UpdateShipper` method */
  getUpdateShipperURI(request: UpdateShipperRequest, options?: T): string;
  /** Get the URI of `DeleteShipper` method */
  getDeleteShipperURI(request: DeleteShipperRequest, options?: T): string;
  /** Get the URI of `GetSite` method */
  getGetSiteURI(request: GetSiteRequest, options?: T): string;
  /** Get the URI of `ListSites` method */
  getListSitesURI(request: ListSitesRequest, options?: T): string;
  /** Get the URI of `CreateSite` method */
  getCreateSiteURI(request: CreateSiteRequest, options?: T): string;
  /** Get the URI of `UpdateSite` method */
  getUpdateSiteURI(request: UpdateSiteRequest, options?: T): string;
  /** Get the URI of `DeleteSite` method */
  getDeleteSiteURI(request: DeleteSiteRequest, options?: T): string;
  /** Get the URI of `GetShipment` method */
  getGetShipmentURI(request: GetShipmentRequest, options?: T): string;
  /** Get the URI of `ListShipments` method */
  getListShipmentsURI(request: ListShipmentsRequest, options?: T): string;
  /** Get the URI of `CreateShipment` method */
  getCreateShipmentURI(request: CreateShipmentRequest, options?: T): string;
  /** Get the URI of `UpdateShipment` method */
  getUpdateShipmentURI(request: UpdateShipmentRequest, options?: T): string;
  /** Get the URI of `DeleteShipment` method */
  getDeleteShipmentURI(request: DeleteShipmentRequest, options?: T): string;
}

export function getFreightServiceURIs<T = unknown>(): FreightServiceURIs<T> {
  return {
    getGetShipperURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.name) {
        throw new Error("missing required field request.name");
      }
      const path = `v1/${request.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getListShippersURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `v1/shippers`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.pageSize) {
        queryParams.push(`pageSize=${encodeURIComponent(request.pageSize.toString())}`);
      }
      if (request.pageToken) {
        queryParams.push(`pageToken=${encodeURIComponent(request.pageToken.toString())}`);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getCreateShipperURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `v1/shippers`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getUpdateShipperURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.shipper?.name) {
        throw new Error("missing required field request.shipper.name");
      }
      const path = `v1/${request.shipper.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.updateMask) {
        queryParams.push(`updateMask=${encodeURIComponent(request.updateMask.toString())}`);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getDeleteShipperURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.name) {
        throw new Error("missing required field request.name");
      }
      const path = `v1/${request.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getGetSiteURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.name) {
        throw new Error("missing required field request.name");
      }
      const path = `v1/${request.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getListSitesURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.parent) {
        throw new Error("missing required field request.parent");
      }
      const path = `v1/${request.parent}/sites`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.pageSize) {
        queryParams.push(`pageSize=${encodeURIComponent(request.pageSize.toString())}`);
      }
      if (request.pageToken) {
        queryParams.push(`pageToken=${encodeURIComponent(request.pageToken.toString())}`);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getCreateSiteURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.parent) {
        throw new Error("missing required field request.parent");
      }
      const path = `v1/${request.parent}/sites`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getUpdateSiteURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.site?.name) {
        throw new Error("missing required field request.site.name");
      }
      const path = `v1/${request.site.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.updateMask) {
        queryParams.push(`updateMask=${encodeURIComponent(request.updateMask.toString())}`);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getDeleteSiteURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.name) {
        throw new Error("missing required field request.name");
      }
      const path = `v1/${request.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getGetShipmentURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.name) {
        throw new Error("missing required field request.name");
      }
      const path = `v1/${request.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getListShipmentsURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.parent) {
        throw new Error("missing required field request.parent");
      }
      const path = `v1/${request.parent}/shipments`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.pageSize) {
        queryParams.push(`pageSize=${encodeURIComponent(request.pageSize.toString())}`);
      }
      if (request.pageToken) {
        queryParams.push(`pageToken=${encodeURIComponent(request.pageToken.toString())}`);
      }
      if (request.query) {
        const query = handlerOptions?.mapStringify
          ? handlerOptions.mapStringify(request.query)
          : Object.entries(request.query).map((x) => (
            `${encodeURIComponent(`query[${x[0]}]`)}=${encodeURIComponent(x[1].toString())}`
          ));
        queryParams.push(query);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getCreateShipmentURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.parent) {
        throw new Error("missing required field request.parent");
      }
      const path = `v1/${request.parent}/shipments`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getUpdateShipmentURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.shipment?.name) {
        throw new Error("missing required field request.shipment.name");
      }
      const path = `v1/${request.shipment.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.updateMask) {
        queryParams.push(`updateMask=${encodeURIComponent(request.updateMask.toString())}`);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getDeleteShipmentURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.name) {
        throw new Error("missing required field request.name");
      }
      const path = `v1/${request.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
  };
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type RequestType<T = Record<string, any> | string | null> = {
  path: string;
  method: string;
  body: T;
};

type RequestHandler<T = unknown> = (
  request: RequestType & T,
  meta: { service: string, method: string },
) => Promise<unknown>;

export function createFreightServiceClient<T = unknown>(
  handler: RequestHandler<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handlerOptions: {
    mapStringify?: (map: Record<string, unknown>) => string;
  } = {},
): FreightService<T> {
  const uris = getFreightServiceURIs<T>();
  return {
    getShipper(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getGetShipperURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "GetShipper",
      }) as Promise<Shipper>;
    },
    listShippers(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getListShippersURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "ListShippers",
      }) as Promise<ListShippersResponse>;
    },
    createShipper(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getCreateShipperURI(request, options);
      const body = request?.shipper ?? {};
      return handler({
        path: uri,
        method: "POST",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "CreateShipper",
      }) as Promise<Shipper>;
    },
    updateShipper(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getUpdateShipperURI(request, options);
      const body = request?.shipper ?? {};
      return handler({
        path: uri,
        method: "PATCH",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "UpdateShipper",
      }) as Promise<Shipper>;
    },
    deleteShipper(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getDeleteShipperURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "DELETE",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "DeleteShipper",
      }) as Promise<Shipper>;
    },
    getSite(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getGetSiteURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "GetSite",
      }) as Promise<Site>;
    },
    listSites(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getListSitesURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "ListSites",
      }) as Promise<ListSitesResponse>;
    },
    createSite(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getCreateSiteURI(request, options);
      const body = request?.site ?? {};
      return handler({
        path: uri,
        method: "POST",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "CreateSite",
      }) as Promise<Site>;
    },
    updateSite(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getUpdateSiteURI(request, options);
      const body = request?.site ?? {};
      return handler({
        path: uri,
        method: "PATCH",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "UpdateSite",
      }) as Promise<Site>;
    },
    deleteSite(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getDeleteSiteURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "DELETE",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "DeleteSite",
      }) as Promise<Site>;
    },
    getShipment(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getGetShipmentURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "GetShipment",
      }) as Promise<Shipment>;
    },
    listShipments(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getListShipmentsURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "ListShipments",
      }) as Promise<ListShipmentsResponse>;
    },
    createShipment(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getCreateShipmentURI(request, options);
      const body = request?.shipment ?? {};
      return handler({
        path: uri,
        method: "POST",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "CreateShipment",
      }) as Promise<Shipment>;
    },
    updateShipment(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getUpdateShipmentURI(request, options);
      const body = request?.shipment ?? {};
      return handler({
        path: uri,
        method: "PATCH",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "UpdateShipment",
      }) as Promise<Shipment>;
    },
    deleteShipment(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getDeleteShipmentURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "DELETE",
        body,
        ...(options as T),
      }, {
        service: "FreightService",
        method: "DeleteShipment",
      }) as Promise<Shipment>;
    },
  };
}

// @@protoc_insertion_point(typescript-http-eof)
