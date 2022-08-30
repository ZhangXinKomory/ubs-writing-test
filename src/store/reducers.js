import { ADD, REMOVE, UPDATE, ADDCHILD, REMOVECHILD, UPDATECHILD } from './actions'

const defaultState = {
    headers: ['Name', 'Type', 'Value'],
    defaultItem: {
        id: '',
        name: "",
        type: "str",
        value: "",
    },
    list: [
        {
            id: 0,
            name: "",
            type: "str",
            value: "",
            children: []
        },
    ]
}

const reducers = (state=defaultState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, list: [...state.list, action.item] }

        case UPDATE:
            {
                const { index, key, value } = action.data;
                let result = JSON.parse(JSON.stringify([...state.list]));
                // TODO if updsate for children?
                result[index][key] = value;
                if(key == 'type') {
                    // TODO children is nessencery?
                    if(value == 'list'){
                        result[index].children = [ state.defaultItem ];
                    } else {
                        delete result[index].children;
                    }
                }
                return { ...state, list: result }
            }

        case REMOVE:
            {
                const { index } = action;
                let result = [...state.list];
                result.splice(index, 1);
                return { ...state, list: result }
            }

        // TODO reducers for children change
        case ADDCHILD:
            return { }

        case UPDATECHILD:
            return { }

        case REMOVECHILD:
            return { }

        default:
            return state;
    }
}

export default reducers;
