// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

const getUsers = function () {
    let ret = '';
    ret = uni.getStorageSync(USERS_KEY);
    if (!ret) {
        ret = '[]';
    }
    return JSON.parse(ret);
}

const addUser = function (userInfo) {
    let users = getUsers();
    users.push({
        account: userInfo.account,
        password: userInfo.password
    });
    uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const getToken=function(){
	let token = uni.getStorageSync("token");
	if (!token) {
	    token = '';
	}
	return token;
}
const setToken=function(token){
	 uni.setStorageSync("token", token);
}

const setRecentAddress=function(recentAddress){
	let addresss = uni.getStorageSync("recentAddress");
	if (!addresss) {
	    addresss = '[]';
	}
	addresss=JSON.parse(addresss);
	addresss.push(recentAddress);
	uni.setStorageSync("recentAddress", JSON.stringify(addresss));
}

export default {
    getUsers,
    addUser,
	getToken,
	setToken
}
