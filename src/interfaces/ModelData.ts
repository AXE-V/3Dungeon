export type ModelData = {
  created_at?: string;
  last_accessed_at?: string;
  metadata?: {
    cacheControl?: string;
    contentLength?: number;
    eTag?: string;
    httpStatusCode?: number;
    lastModified?: string;
    mimetype?: string;
    size?: number;
  };
  name?: string;
  updated_at?: string;
};
