import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`);
  return {
    type: "BILLING_SUMMARY_FETCHED",
    payload: request
  };
}
