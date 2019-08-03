export default (app: any) => {
    app.model({
      namespace: 'b',
      state: 0,
      reducers: {
        add(count: number) { return count + 1 },
        minus(count: number) { return count - 1 },
      },
    });
  }
  
  