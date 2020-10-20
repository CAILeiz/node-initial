class daPromise {
  constructor(fn) {
    // 将成功的事件函数集成在successList数组里
    this.successList = [];
    // 将失败的事件函数集成在failList数组里
    this.failList = [];
    // 初始化promise状态 pending fullfilled rejected
    this.state = "pending";
    // 传入的函数对象（异步操作的函数内容
    fn(this.resolveFn.bind(this), this.rejectFn.bind(this));
  }
  then(successFn, failFn) {
    if (typeof successFn == "function") {
      this.successList.push(successFn);
    }
    if (typeof failFn == "function") {
      this.successList.push(failFn);
    }
  }
  catch(failFn) {
    if (typeof failFn == "function") {
      this.successList.push(failFn);
    }
  }
  resolveFn(res) {
    this.state = "fullfilled";
    // 注册到的所有成功事件进行调用
    this.successList.forEach((item) => {
      item(res);
    });
  }
  rejectFn(res) {
    this.state = "rejected";
    // 注册到的所有失败事件进行调用
    this.failList.forEach((item) => {
      item(res);
    });
  }
}
