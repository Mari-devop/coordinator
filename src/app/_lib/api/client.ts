export interface ApiError {
  error: string;
  message?: string;
  details?: Array<{ field: string; message: string }>;
}

export async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    let data: unknown;
    const contentType = response.headers.get("content-type");
    
    try {
      const text = await response.text();
      
      if (contentType && contentType.includes("application/json")) {
        if (text) {
          try {
            data = JSON.parse(text);
          } catch (parseError) {
            console.error("Error parsing JSON response:", parseError, "Text:", text);
            data = { message: text, error: "Invalid JSON response" };
          }
        } else {
          data = {};
        }
      } else {
        data = text ? { message: text } : {};
      }
    } catch (readError) {
      console.error("Error reading response:", readError);
      data = { message: "Failed to read response", error: "Read error" };
    }

    if (!response.ok) {
      const error = (data as ApiError) || {};
      const errorMessage = 
        (error as ApiError)?.error || 
        (error as ApiError)?.message || 
        (typeof data === 'string' ? data : undefined) ||
        (typeof data === 'object' && data !== null && 'message' in data ? String((data as { message: string }).message) : undefined) ||
        `HTTP ${response.status}: ${response.statusText}` || 
        "API request failed";
      
      const apiError = error as ApiError;
      const finalErrorMessage = apiError?.details && apiError.details.length > 0
        ? apiError.details.map(d => d.message).join(", ")
        : errorMessage;
      
      throw new Error(finalErrorMessage);
    }

    return data as T;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Network error or request failed");
  }
}

