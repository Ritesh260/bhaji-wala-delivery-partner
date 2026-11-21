
import api from "./axios";

// Register Delivery Partner
export const registerDeliveryPartner = (formData) => {
  return api.post("/delivery-partners/register", formData);
};
