import { DvaInstance } from 'dva'
export default (app: DvaInstance) => {
    app.model({
      namespace: 'b',
      state: 0,
      reducers: {
        add(count: number) { return count + 1 },
        minus(count: number) { return count - 1 },
      },
    });
  }
  
  