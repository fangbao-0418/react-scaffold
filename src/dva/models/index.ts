import { DvaInstance } from 'dva'
import a from './a'
import b from './b'
export function useModel(app: DvaInstance) {
    a(app)
    b(app)
}