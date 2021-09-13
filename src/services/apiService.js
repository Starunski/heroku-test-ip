import axios from "axios";

class ApiService {

  async getUserLocation(ip) {
    const baseUrl = "http://api.ipstack.com";
    const accessToken = "326a9a3b86144aec56ecba70b189a32f";

    const res = await axios.get(`${baseUrl}/${ip}?access_key=${accessToken}`);
    console.log("res", res);
    const response = await res.data;
    return response;
  }
}
const apiService = new ApiService();

export { apiService };
