
import api from "./axios";

// REGISTER DELIVERY PARTNER
export const registerDeliveryPartner = (formData) => {
  return api.post("/delivery-partners/register", formData);
};

// LOGIN DELIVERY PARTNER
export const loginDeliveryPartner = async (credentials) => {
  const response = await api.post(
    "/delivery-partners/login",
    credentials
  );

  const token =
    response.data?.token ||
    response.data?.data?.token;

  if (token && typeof window !== "undefined") {
    localStorage.setItem("deliveryPartnerToken", token);
  }

  return response;
};

// LOGOUT DELIVERY PARTNER
export const logoutDeliveryPartner = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("deliveryPartnerToken");
  }
};
