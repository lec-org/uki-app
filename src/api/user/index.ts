import request from '../index'
// * <===登录===>

// * <类型>

// * [请求类型]
interface LoginApiReq {
	username: string
	password: string
}

// * [返回类型]
interface LoginApiRes {
	data: {
		code: number
		data: {
			token: string
			userInfoVo: {
				avatar: string
				grade: number
				id: string
				nickname: string
				signature: string
				username: string
			}
		}
		msg: string
	}
}

// * <请求>

export const Login = (params: LoginApiReq): Promise<LoginApiRes> =>
	request.post('/user/login', params)

// * <===登出===>

// * <类型>

// * [请求类型]
interface LogoutApiReq {
	token: string
}

// * [返回类型]
interface LogoutApiRes {
	code: number
	msg: string
}

// * <请求>
export const Logout = (params: LogoutApiReq): Promise<LogoutApiRes> =>
	request.post('/user/logout', {
		headers: {
			Authorization: params.token,
		},
	})

// * <===获取用户个人信息===>

// * <类型>

// * [请求类型]
interface getUserInfoApiReq {
	token: string
	id: string
}

// * [返回类型]
interface getUserInfoApiRes {
	code: number
	data: {
		avatar: string
		grade: string
		id: string
		nickname: string
		signature: string
		username: string
	}
	msg: string
}

// * <请求>
export const getUserinfo = (
	params: getUserInfoApiReq
): Promise<getUserInfoApiRes> =>
	request.get(`/user/info/${params.id}`, {
		headers: {
			token: params.token,
		},
	})

// * <===获取登录状态===>

// * <类型>

// * [请求类型]
interface getLoginStatusApiReq {
	token: string
}

// * [返回类型]
interface getLoginStatusApiRes {
	data: {
		code: number
		data: boolean
		msg: string
	}
}

// * <请求>
export const getLoginStatus = (
	params: getLoginStatusApiReq
): Promise<getLoginStatusApiRes> =>
	request.get('/user/isDead', {
		headers: {
			token: params.token,
		},
	})
