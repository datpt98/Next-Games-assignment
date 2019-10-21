const dataReducer = (state = [], action) => {
	switch(action.type) {
		case 'INIT_DATAS':
			return action.data;
		default:
      		return state;
	}
}

export const initializeDatas = () => {
	return async dispatch => {
        const response = await fetch('https://status.datadoghq.com', {
            mode: 'cors', headers: {accept: "application/json"}
          });
        const datas = await response.json();

		dispatch({
			type: 'INIT_DATAS',
			data: datas.incidents.slice(0,5),
		})
	}
}

export default dataReducer;