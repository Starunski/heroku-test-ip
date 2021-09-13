import axios from "axios";

class ApiService {
  // async getUserLocation(ip) {
  // const baseUrl = "http://api.ipstack.com";
  // const accessToken = "326a9a3b86144aec56ecba70b189a32f";

  //   const res = await fetch(`${baseUrl}/${ip}?access_key=${accessToken}`, {
  //     method: "GET",
  //     headers: new Headers({
  //       // Authorization: 'Bearer ' + accessToken,
  //       "Content-type": "application/json",
  //     }),
  //   });
  //   // if (!res.ok) {
  //   //   throw new Error("Fetch request is failed", {
  //   //     url: `${baseUrl}/134.201.250.155`,
  //   //     status: res.status,
  //   //     statusText: res.statusText,
  //   //   });
  //   // }
  //   const response = await res.json();
  //   return response;
  // }

  async getUserLocation(ip) {
    debugger;
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
