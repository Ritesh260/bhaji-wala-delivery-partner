
import api from "./axios";

// GET DELIVERY PARTNER PROFILE
export const getDeliveryPartnerProfile = () => {
  return api.get("/delivery-partners/me");
};

// GET APPLICATION STATUS
export const getDeliveryPartnerApplicationStatus = () => {
  return api.get("/delivery-partners/application-status");
};

// GET DELIVERY PARTNER DASHBOARD
export const getDeliveryPartnerDashboard = () => {
  return api.get("/delivery-partners/dashboard");
};
