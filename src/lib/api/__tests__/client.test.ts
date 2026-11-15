/**
 * Basic unit tests for the API client foundation.
 * These do not require a live backend.
 */

import { ApiError } from '../client';

describe('ApiError', () => {
  it('creates an error with status and data', () => {
    const err = new ApiError('Something went wrong', 400, { detail: 'Invalid' });
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('ApiError');
    expect(err.message).toBe('Something went wrong');
    expect(err.status).toBe(400);
    expect(err.data).toEqual({ detail: 'Invalid' });
    expect(err.isNetworkError).toBe(false);
  });

  it('marks network errors correctly', () => {
    const err = new ApiError('Network failed', 0, null, true);
    expect(err.isNetworkError).toBe(true);
    expect(err.status).toBe(0);
  });
});
