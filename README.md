# Synthetic checkout fixture

No production traffic, credentials, or customer data. checkout-api calls payments-worker, which reads postgres-primary. The fixture changes checkout timeout from 1000ms to 250ms while payment work takes 400ms. Telemetry is generated evidence, not a live deployment.
