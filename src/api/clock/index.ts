import request from '../index'

// * <===查看打卡列表===>

// * <类型>

// * [请求类型]
interface getClockListApiReq {
	pageNum: number
	pageSize: number
	grade: number
}

// * [返回类型]
interface getClockListApiRes {
	code: number
	data: {
		rows: {
			avatar: string
			nickname: string
			status: number
			targetDuration: number
			totalDuration: number
		}[]
	}
	msg: string
}

// * <请求>
export const getClockList = (
	params: getClockListApiReq
): Promise<getClockListApiRes> => request.post('/clock/list', params)

// * <===查看个人打卡信息===>

// * <类型>

// * [请求类型]
interface getUserClockInfoApiReq {
	token: string
	id: string
}

// * [返回类型]
interface getUserClockInfoApiRes {
	code: number
	data: {
		status: number
		targetDuration: number
		totalDuration: number
	}
	msg: string
}

// * <请求>
export const getUserClockInfo = (
	params: getUserClockInfoApiReq
): Promise<getUserClockInfoApiRes> =>
	request.post(`/clock/nowClock/${params.id}`, {
		headers: {
			Authorization: params.token,
		},
	})

// * <===打卡(连接团队Wifi才可以打卡下卡)===>

// * <类型>

// * [请求类型]
interface clockUnderLecWifiApiReq {
	token: string
}

// * [返回类型]
export interface clockUnderLecWifiApiRes {
	data: {
		code: number
		data:
			| {
					id?: string
					status?: number
					totalDuration?: number
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }
			| string
		msg: string
	}
}

// * <请求>
export const clockUnderLecWifi = (
	params: clockUnderLecWifiApiReq
): Promise<clockUnderLecWifiApiRes> =>
	request.post('/clock/clock', null, {
		headers: {
			token: params.token,
		},
	})

// * <===查看用户一周内每天打卡时长===>

// * <类型>

// * [请求类型]
interface getUserWeekClockTimeApiReq {
	token: string
}

// * [返回类型]
interface getUserWeekClockTimeApiRes {
	data: {
		code: number
		data: {
			id: string
			mon: number
			tue: number
			wed: number
			thu: number
			fri: number
			sat: number
			sun: number
			totalDuration: number
		}
		msg: string
	}
}

// * <请求>
export const getUserWeekClockTime = (
	params: getUserWeekClockTimeApiReq
): Promise<getUserWeekClockTimeApiRes> =>
	request.get('/clock/day', {
		headers: {
			token: params.token,
		},
	})
