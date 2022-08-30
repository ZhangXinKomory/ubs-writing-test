/*
 * action type
 */
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';
export const ADDCHILD = 'ADDCHILD';
export const REMOVECHILD = 'REMOVECHILD';
export const UPDATECHILD = 'UPDATECHILD';

/*
 * action list
 */
export const add = (item) => {
  return { type: ADD, item }
}

export function remove(id) {
  return { type: REMOVE }
}

export function update(data) {
  return { type: UPDATE, data }
}
