import axios from 'axios';
function axiosGet(method, url){
    return (axios({
        method: method,
        url: url,
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }));
}
export function getDirectSubordinates(serachValue){
    const url = `https://api.additivasia.io/api/v1/assignment/employees/${serachValue}`;
    return axiosGet("Get", url);
}


//Given non directory url is not working and giving 404 error so i used same one as Directory url
export function getNonDirectSubordinates(serachValue){
    const url = `https://api.additivasia.io/api/v1/assignment/employees/${serachValue}`;
    return axiosGet("Get", url);

}
