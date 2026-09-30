export const CHECKOUT_TIMEOUT_MS = 1000;
export async function checkout(payments: () => Promise<unknown>) {
  return Promise.race([payments(), new Promise((_, reject) => setTimeout(() => reject(new DOMException("Synthetic checkout timeout", "TimeoutError")), CHECKOUT_TIMEOUT_MS))]);
}
