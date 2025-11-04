export interface ApiError {
  error: string;
  message?: string;
  details?: Array<{ field: string; message: string }>;
}

export async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  let data;
  const contentType = response.headers.get("content-type");
  
  if (contentType && contentType.includes("application/json")) {
    try {
      data = await response.json();
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError);
      data = {};
    }
  } else {
    try {
      const text = await response.text();
      data = text ? { message: text } : {};
    } catch {
      data = {};
    }
  }

  if (!response.ok) {
    const error: ApiError = data || {};
    const errorMessage = 
      error?.error || 
      error?.message || 
      (typeof data === 'string' ? data : undefined) ||
      `HTTP ${response.status}: ${response.statusText}` || 
      "API request failed";
    throw new Error(errorMessage);
  }

  return data;
}

